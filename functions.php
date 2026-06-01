<?php
/**
 * KESHO child theme functions.
 *
 * @package hello-elementor-kesho
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue parent + child styles.
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'hello-elementor-parent',
        get_template_directory_uri() . '/style.css',
        [],
        wp_get_theme(get_template())->get('Version')
    );
    wp_enqueue_style(
        'hello-elementor-kesho',
        get_stylesheet_directory_uri() . '/style.css',
        ['hello-elementor-parent'],
        wp_get_theme()->get('Version')
    );

    // Preload critical fonts for LCP
    add_action('wp_head', function () {
        echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
    }, 1);
}, 20);

/**
 * Performance: disable WP emoji.
 */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');

/**
 * Security: remove WP version meta.
 */
remove_action('wp_head', 'wp_generator');
add_filter('the_generator', '__return_empty_string');

/**
 * Security: disable XML-RPC (rarely needed, common attack vector).
 */
add_filter('xmlrpc_enabled', '__return_false');

/**
 * Security: remove version from script/style enqueues.
 */
add_filter('style_loader_src', function ($src) {
    if (strpos($src, 'ver=')) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}, 9999);
add_filter('script_loader_src', function ($src) {
    if (strpos($src, 'ver=')) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}, 9999);

/**
 * Performance: defer non-critical JS.
 */
add_filter('script_loader_tag', function ($tag, $handle) {
    $defer_handles = ['wp-embed', 'comment-reply'];
    if (in_array($handle, $defer_handles, true)) {
        return str_replace(' src', ' defer src', $tag);
    }
    return $tag;
}, 10, 2);

/**
 * Accessibility: add skip link to body.
 */
add_action('wp_body_open', function () {
    echo '<a class="skip-link screen-reader-text" href="#content">Skip to content</a>';
});

/**
 * SEO: clean up <head> output.
 */
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_shortlink_wp_head');

/**
 * Disable REST API for non-authenticated users on sensitive endpoints
 * (helps prevent user enumeration).
 */
add_filter('rest_endpoints', function ($endpoints) {
    if (isset($endpoints['/wp/v2/users'])) {
        unset($endpoints['/wp/v2/users']);
    }
    if (isset($endpoints['/wp/v2/users/(?P<id>[\d]+)'])) {
        unset($endpoints['/wp/v2/users/(?P<id>[\d]+)']);
    }
    return $endpoints;
});

/**
 * Login: rename WP login error to generic message (don't leak which field is wrong).
 */
add_filter('login_errors', function () {
    return 'Invalid login credentials.';
});

/**
 * Login: customise login page logo.
 */
add_action('login_enqueue_scripts', function () {
    echo '<style>
        body.login { background: #f5ede3; }
        .login h1 a {
            background-image: url("' . esc_url(get_stylesheet_directory_uri() . '/login-logo.png') . '") !important;
            background-size: contain !important;
            width: 200px !important;
            height: 70px !important;
        }
        .wp-core-ui .button-primary { background: #3d2e22; border-color: #3d2e22; }
        .wp-core-ui .button-primary:hover { background: #8a7060; border-color: #8a7060; }
    </style>';
});

add_filter('login_headerurl', function () {
    return home_url('/');
});

add_filter('login_headertext', function () {
    return 'KESHO Aesthetics';
});

/**
 * Inject GTM dataLayer events for form submissions.
 * Pairs with the GTM 'form_submit' trigger.
 */
add_action('wp_footer', function () {
    ?>
    <script>
    (function() {
        window.dataLayer = window.dataLayer || [];
        document.addEventListener('submit', function(e) {
            var form = e.target;
            if (!form || form.tagName !== 'FORM') return;
            window.dataLayer.push({
                event: 'kesho_form_submit',
                form_id: form.id || 'unknown',
                form_name: form.getAttribute('name') || form.getAttribute('aria-label') || 'unknown'
            });
        }, true);
    })();
    </script>
    <?php
});

/**
 * Schema: inject LocalBusiness + MedicalBusiness JSON-LD on every page.
 * (Rank Math handles per-page schema; this is the org-wide base.)
 */
add_action('wp_head', function () {
    if (is_admin()) return;
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => ['MedicalBusiness', 'LocalBusiness'],
        'name' => 'KESHO Aesthetics',
        'image' => 'https://keshopro.com/wp-content/uploads/kesho-logo.png',
        'url' => 'https://keshopro.com',
        'telephone' => '__PHONE__',
        'email' => 'info@keshoaesthetics.co.uk',
        'priceRange' => '££',
        'address' => [
            '@type' => 'PostalAddress',
            'streetAddress' => '375 Regents Park Road',
            'addressLocality' => 'Finchley',
            'addressRegion' => 'London',
            'postalCode' => 'N3 1DE',
            'addressCountry' => 'GB',
        ],
        'geo' => [
            '@type' => 'GeoCoordinates',
            'latitude' => 51.6005,
            'longitude' => -0.1928,
        ],
        'openingHoursSpecification' => [
            // CONFIGURE: real hours
            ['@type' => 'OpeningHoursSpecification', 'dayOfWeek' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'opens' => '09:00', 'closes' => '19:00'],
            ['@type' => 'OpeningHoursSpecification', 'dayOfWeek' => ['Saturday'], 'opens' => '10:00', 'closes' => '17:00'],
        ],
        'medicalSpecialty' => 'CosmeticDermatology',
        'sameAs' => [
            // CONFIGURE: real social profile URLs
            'https://www.instagram.com/keshoaesthetics',
            'https://www.facebook.com/keshoaesthetics',
            'https://www.tiktok.com/@keshoaesthetics',
        ],
    ];
    echo "\n<script type=\"application/ld+json\">\n" . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "\n</script>\n";
}, 5);
