# KESHO Schema Markup Library

> Use these JSON-LD blocks to override or supplement Rank Math's automatic schema.
> Configure via Rank Math → page → **Schema** tab → "Add Custom Schema" → paste JSON.
> Replace `__PHONE__` and any TBD values before going live.

---

## 1. Organization + LocalBusiness + MedicalBusiness (site-wide)

This is already injected via the child theme's `functions.php` (auto on every page). Reproduced here for reference / GTM Custom HTML override.

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "name": "KESHO Aesthetics",
  "image": "https://keshopro.com/wp-content/uploads/kesho-logo.png",
  "url": "https://keshopro.com",
  "telephone": "__PHONE__",
  "email": "info@keshoaesthetics.co.uk",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "375 Regents Park Road",
    "addressLocality": "Finchley",
    "addressRegion": "London",
    "postalCode": "N3 1DE",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.6005,
    "longitude": -0.1928
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "10:00", "closes": "17:00" }
  ],
  "medicalSpecialty": "CosmeticDermatology",
  "sameAs": [
    "https://www.instagram.com/keshoaesthetics",
    "https://www.facebook.com/keshoaesthetics",
    "https://www.tiktok.com/@keshoaesthetics"
  ]
}
```

---

## 2. Person — Claire (practitioner profile)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Claire __SURNAME__",
  "jobTitle": "Lead Aesthetic Practitioner",
  "image": "https://keshopro.com/wp-content/uploads/claire-headshot.jpg",
  "url": "https://keshopro.com/about/claire/",
  "telephone": "__PHONE__",
  "email": "info@keshoaesthetics.co.uk",
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "KESHO Aesthetics",
    "url": "https://keshopro.com"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional certification",
      "name": "OfQual-regulated aesthetic practitioner qualification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Office of Qualifications and Examinations Regulation",
        "url": "https://www.gov.uk/government/organisations/ofqual"
      }
    }
  ],
  "knowsAbout": [
    "Anti-wrinkle treatments",
    "Dermal fillers",
    "Lip fillers",
    "Skin boosters",
    "Microneedling"
  ]
}
```

---

## 3. Person — Kyle (pharmacist)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kyle __SURNAME__",
  "jobTitle": "Independent Prescribing Pharmacist",
  "image": "https://keshopro.com/wp-content/uploads/kyle-headshot.jpg",
  "url": "https://keshopro.com/about/kyle/",
  "telephone": "__PHONE__",
  "email": "info@keshoaesthetics.co.uk",
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "KESHO Aesthetics",
    "url": "https://keshopro.com"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional registration",
      "name": "GPhC Registered Pharmacist (Independent Prescriber)",
      "recognizedBy": {
        "@type": "Organization",
        "name": "General Pharmaceutical Council",
        "url": "https://www.pharmacyregulation.org"
      },
      "identifier": "__GPHC_NUMBER__"
    }
  ],
  "knowsAbout": [
    "Prescription-only medicines",
    "Botulinum toxin prescribing",
    "Aesthetic medicine",
    "Hyaluronidase emergency protocols"
  ]
}
```

---

## 4. Person — Dr Ryan Marni (doctor)

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr Ryan Marni",
  "jobTitle": "Doctor",
  "image": "https://keshopro.com/wp-content/uploads/dr-ryan-marni-headshot.jpg",
  "url": "https://keshopro.com/about/dr-ryan-marni/",
  "telephone": "__PHONE__",
  "email": "info@keshoaesthetics.co.uk",
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "KESHO Aesthetics",
    "url": "https://keshopro.com"
  },
  "medicalSpecialty": "CosmeticDermatology",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional registration",
      "name": "GMC Registered Doctor",
      "recognizedBy": {
        "@type": "Organization",
        "name": "General Medical Council",
        "url": "https://www.gmc-uk.org"
      },
      "identifier": "__GMC_NUMBER__"
    }
  ]
}
```

---

## 5. MedicalProcedure — Anti-Wrinkle Treatment

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Anti-Wrinkle Treatment (Botulinum Toxin)",
  "alternateName": ["Botox", "Anti-wrinkle injections", "Wrinkle relaxer"],
  "url": "https://keshopro.com/treatments/anti-wrinkle/",
  "image": "https://keshopro.com/wp-content/uploads/treatment-anti-wrinkle.jpg",
  "description": "Minimally invasive injection of botulinum toxin to relax targeted muscles, reducing the appearance of dynamic wrinkles such as frown lines, forehead lines, and crow's feet.",
  "procedureType": "https://schema.org/PercutaneousProcedure",
  "bodyLocation": "Face",
  "preparation": "Avoid blood-thinning medications and alcohol for 24 hours before treatment. Arrive without makeup if possible.",
  "followup": "Avoid lying flat, vigorous exercise, and alcohol for 4-24 hours. Complimentary review at 2 weeks.",
  "howPerformed": "A registered prescriber assesses your facial anatomy, prescribes botulinum toxin, and a trained practitioner administers small injections via fine needle into targeted muscles.",
  "performedBy": {
    "@type": "MedicalBusiness",
    "name": "KESHO Aesthetics",
    "url": "https://keshopro.com"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "180",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "priceCurrency": "GBP",
      "price": "180",
      "referenceQuantity": {
        "@type": "QuantitativeValue",
        "value": 1,
        "unitText": "area"
      }
    },
    "availability": "https://schema.org/InStock",
    "url": "https://keshopro.com/book/"
  }
}
```

---

## 6. MedicalProcedure — Lip Fillers

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Lip Filler Treatment",
  "alternateName": ["Lip augmentation", "Lip enhancement"],
  "url": "https://keshopro.com/treatments/lip-fillers/",
  "image": "https://keshopro.com/wp-content/uploads/treatment-lip-fillers.jpg",
  "description": "Subtle enhancement of lip volume, shape, and definition using premium hyaluronic acid filler.",
  "procedureType": "https://schema.org/PercutaneousProcedure",
  "bodyLocation": "Lips",
  "preparation": "Avoid blood thinners and alcohol 24h before treatment. Avoid aspirin/ibuprofen if possible.",
  "followup": "Cold compress for first 24h. Avoid exercise, heat, alcohol for 48h. Complimentary 2-week review.",
  "howPerformed": "After consultation, topical numbing cream is applied. Hyaluronic acid filler is injected using fine cannula or needle to enhance lip shape and volume.",
  "performedBy": { "@type": "MedicalBusiness", "name": "KESHO Aesthetics", "url": "https://keshopro.com" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "150",
    "availability": "https://schema.org/InStock",
    "url": "https://keshopro.com/book/"
  }
}
```

---

## 7. MedicalProcedure — Dermal Fillers

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Dermal Filler Treatment",
  "url": "https://keshopro.com/treatments/dermal-fillers/",
  "image": "https://keshopro.com/wp-content/uploads/treatment-dermal-fillers.jpg",
  "description": "Restoration of facial volume and definition using hyaluronic acid dermal fillers. Areas treated include cheeks, jawline, chin, and nasolabial folds.",
  "procedureType": "https://schema.org/PercutaneousProcedure",
  "bodyLocation": "Face",
  "preparation": "Avoid blood thinners and alcohol 24h before treatment.",
  "followup": "Avoid pressure on treated area for 24h. Avoid exercise, heat, alcohol for 48h. Complimentary 2-week review.",
  "howPerformed": "After detailed assessment, hyaluronic acid filler is injected via fine cannula or needle to restore volume, contour, or definition.",
  "performedBy": { "@type": "MedicalBusiness", "name": "KESHO Aesthetics", "url": "https://keshopro.com" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "280",
    "availability": "https://schema.org/InStock",
    "url": "https://keshopro.com/book/"
  }
}
```

---

## 8. MedicalProcedure — Skin Boosters

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Skin Booster Treatment",
  "alternateName": ["Skinvive", "Polynucleotides", "Profhilo-style booster"],
  "url": "https://keshopro.com/treatments/skin-boosters/",
  "image": "https://keshopro.com/wp-content/uploads/treatment-skin-boosters.jpg",
  "description": "Injectable treatments that improve skin hydration, elasticity, glow, and texture. Options include hyaluronic acid boosters, Skinvive, polynucleotides, and vitamin B12.",
  "procedureType": "https://schema.org/PercutaneousProcedure",
  "bodyLocation": "Face, neck, hands",
  "howPerformed": "Multiple micro-injections of skin-boosting product distributed across the treatment area to improve overall skin quality.",
  "performedBy": { "@type": "MedicalBusiness", "name": "KESHO Aesthetics", "url": "https://keshopro.com" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "150",
    "availability": "https://schema.org/InStock",
    "url": "https://keshopro.com/book/"
  }
}
```

---

## 9. MedicalProcedure — Microneedling

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Microneedling with PDRN, Collagen, or Exosomes",
  "alternateName": ["Collagen induction therapy", "Skin needling"],
  "url": "https://keshopro.com/treatments/microneedling/",
  "image": "https://keshopro.com/wp-content/uploads/treatment-microneedling.jpg",
  "description": "Microneedling creates controlled micro-injuries to stimulate the skin's natural repair process, combined with topical PDRN, collagen, or exosomes for enhanced results.",
  "procedureType": "https://schema.org/PercutaneousProcedure",
  "bodyLocation": "Face, neck, decolletage, scalp",
  "preparation": "Avoid retinoids and exfoliants for 3-5 days before treatment.",
  "followup": "Use gentle skincare and SPF for 7 days. Avoid sun exposure and active ingredients.",
  "howPerformed": "Topical numbing cream is applied. A microneedling device creates micro-channels in the skin. PDRN, collagen, or exosome serums are massaged in.",
  "performedBy": { "@type": "MedicalBusiness", "name": "KESHO Aesthetics", "url": "https://keshopro.com" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "100",
    "availability": "https://schema.org/InStock",
    "url": "https://keshopro.com/book/"
  }
}
```

---

## 10. FAQPage — Treatment FAQs (apply per treatment page)

Example for Anti-Wrinkle — replicate pattern per page with treatment-specific Q&As.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long do anti-wrinkle treatment results last?",
      "acceptedAnswer": { "@type": "Answer", "text": "Typically 3-4 months, sometimes longer with regular treatment. Results vary by individual." }
    },
    {
      "@type": "Question",
      "name": "Does anti-wrinkle treatment hurt?",
      "acceptedAnswer": { "@type": "Answer", "text": "A very fine needle is used. Most clients describe it as a brief pinch. Numbing is not usually required." }
    },
    {
      "@type": "Question",
      "name": "When will I see results after anti-wrinkle treatment?",
      "acceptedAnswer": { "@type": "Answer", "text": "Subtle effects from day 3. Full results visible at 10-14 days. A complimentary review appointment is offered at 2 weeks." }
    },
    {
      "@type": "Question",
      "name": "Is anti-wrinkle treatment safe?",
      "acceptedAnswer": { "@type": "Answer", "text": "When prescribed and administered by registered practitioners — yes. At KESHO, every treatment is prescribed by our in-house GPhC-registered pharmacist." }
    },
    {
      "@type": "Question",
      "name": "What if I don't like the results?",
      "acceptedAnswer": { "@type": "Answer", "text": "Botulinum toxin effects wear off gradually over 3-4 months. Effects are not permanent." }
    },
    {
      "@type": "Question",
      "name": "Can I have anti-wrinkle treatment before an event?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — but book at least 2 weeks in advance to allow results to fully develop and any minor bruising to resolve." }
    }
  ]
}
```

---

## 11. BreadcrumbList — example for Anti-Wrinkle treatment page

(Rank Math auto-generates these. Override only if needed.)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://keshopro.com/" },
    { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://keshopro.com/treatments/" },
    { "@type": "ListItem", "position": 3, "name": "Anti-Wrinkle Treatment", "item": "https://keshopro.com/treatments/anti-wrinkle/" }
  ]
}
```

---

## Validation

After adding schema to any page, validate with:
- https://search.google.com/test/rich-results
- https://validator.schema.org/

Both should return zero errors. Warnings about "recommended properties" are acceptable.
