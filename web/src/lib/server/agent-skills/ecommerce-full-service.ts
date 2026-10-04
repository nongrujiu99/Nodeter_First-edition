export const ECOMMERCE_FULL_SERVICE_REFERENCES: Record<string, string> = {
    "anti-template-check.md": `# Anti-Template Check

Run this check before final prompt generation. It prevents generic detail-page sets.

## Pre-Generation Check

Before calling image generation, confirm:

- each screen solves a different buyer demand;
- each screen has a matched selling point and a visual proof method;
- at least five page structures are used in the planned set; for 9-12 planned modules, avoid repeating any one structure more than twice;
- at least three subject scales are used;
- at least one screen is an immersive scene;
- at least one screen is a detail or macro proof page;
- at least one screen is a process, operation, comparison, FAQ, or information card page;
- the style system is consistent across the set;
- page layouts do not all use centered product plus top-left title;
- the product style and category determine the visual tone.

## Failure Tendencies To Avoid

- empty background product poster pages after the cover;
- repeating the same layout with changed text;
- meaningless English decoration or unreadable fake labels;
- fabricated certification, sales, review, ranking, test, efficacy, or parameter badges;
- product drift, random accessory addition, structural deformation, or logo/nameplate movement;
- scene unrelated to the selling point;
- crowded visuals where the main title or selling label is unreadable;
- product floating, wrong scale, impossible hand grip, wrong wearing logic, or contradictory shadows.

If a planned screen fails the check, revise the plan before generation. Do not wait for post-generation QA to discover avoidable template problems.`,

    "beauty-personalcare-structures.md": `# Beauty & Personal Care Structures

Use for skincare, cosmetics, hair/body care, fragrance, personal care, and cleansing products.

## Recommended Screens (8\u201310 standard, 10\u201314 complex)

Each screen uses fixed 1500px width and adaptive height \u22643000px.

1. Cover: product texture hero visual plus a core usage-feel title.
2. Pain point: low-risk scene descriptions such as dryness, oiliness, frizz, or dull-looking appearance.
3. Ingredient inspiration: show only user-provided or packaging-visible ingredients; do not claim concentration-based efficacy.
4. Texture page: macro views of cream, liquid, foam, powder, brush heads, sprays, or similar textures.
5. Use steps: opening, dispensing, applying, rinsing, or storing.
6. Detail page: bottle mouth, pump head, bristles, packaging material, or portable structure.
7. Scene page: bathroom, vanity, commuter bag, or travel storage.
8. Closing: usage-experience summary plus fit for daily care.

## Compliance

- Do not claim medical treatment, disease removal, permanent change, or regulatory endorsement.
- High-risk terms such as whitening, spot removal, acne treatment, or hair-loss prevention require evidence provided by the user; otherwise rewrite them as mild experience language.
- Do not fabricate ingredient concentration, test reports, sensitive-skin suitability, or pregnancy suitability.`,

    "buyer-demand-strategy.md": `# Buyer Demand Strategy

Use this file before page planning. The detail page must be planned from buyer demand, not from a fixed visual template.

## Demand-Led Principle

Every screen must combine:

- one buyer demand or concern;
- one matched product selling point;
- one visual proof method;
- one clear scene or information structure.

Do not make pages that are only beautiful product posters. A detail page must answer purchase questions.

## Information Confidence

Classify every potential selling point before using it:

- \`confirmed\`: explicitly provided by the user, clearly visible in the product image, or readable on packaging.
- \`reasonable inference\`: conservative inference from visible product form or normal usage; write as general usage fit, not as a hard claim.
- \`needs confirmation\`: unknown material, size, parameter, efficacy, certification, sales, review, compatibility, ingredient ratio, or authorization.

Use confirmed points first. Use reasonable inference only with conservative wording. Do not place \`needs confirmation\` facts as on-image claims.

## Buyer Demand Map

Before generating, create a \`Buyer Demand Map\` with six to ten likely buyer questions. Prioritize by purchase impact:

1. trust and risk reduction;
2. functional usefulness or style fit;
3. usage scenario and daily fit;
4. material, structure, taste, texture, or craft proof;
5. convenience, storage, portability, operation, or pairing;
6. specification, size, compatibility, package, or care confirmation;
7. emotional value, gifting, display, or lifestyle identity when relevant.

## Product Type Strategy

Choose the primary product strategy. If a product spans types, pick the strategy that answers the strongest buyer concern.

- \`standard / functional product\`: emphasize practical function, operation, structure, efficiency, comparison, scenario fit, and confirmable parameters.
- \`non-standard / aesthetic product\`: emphasize design language, style fit, material texture, visual taste, pairing scenarios, and atmosphere.
- \`consumable product\`: emphasize taste, texture, usage frequency, preparation, packaging convenience, ingredient information that is provided or visible, and daily scenario.
- \`gift / emotional-value product\`: emphasize packaging, ceremony, recipient scenario, display value, atmosphere, and conservative gifting reasons.

## Demand-to-Selling-Point Match

For each planned screen, write:

- buyer demand;
- matched selling point;
- confidence level;
- buyer-facing copy direction;
- visual proof method;
- information that must not be invented.

If no confirmed selling point supports a demand, use a scene-based conservative benefit or mark the missing fact as needing confirmation.

## Platform Defaults

If the user names a platform, adapt page emphasis:

- Taobao / Tmall: high-density selling points, scene plus function, strong visual rhythm.
- JD: functional proof, parameters, quality feeling, structure, and reliability.
- Pinduoduo: direct benefit language, obvious use value, simple high-impact hierarchy.
- Douyin / Xiaohongshu: lifestyle scene, visual impact, social sharing feeling, style identity.
- Amazon: compliance, functional explanation, scene proof, A+ module logic, restrained claims.

If no platform is specified, use a general ecommerce detail page style.`,

    "category-router.md": `# Category Router

Classify the product category from product images and user-provided information. Read only the relevant category file to avoid loading all category rules at once.

## Routing

- Apparel, footwear, bags, accessories, suits, dresses: read \`fashion-page-structures.md\`.
- Food, beverages, nutritional products, agricultural goods, health-food products: read \`food-page-structures.md\`.
- Pet food, pet supplies, cat/dog treats, leash/cleaning products: read \`pet-page-structures.md\`.
- Beauty, skincare, personal care, fragrance, hair/body care: read \`beauty-personalcare-structures.md\`.
- Home goods, daily-use products, storage, cleaning, cookware, small-appliance appearance pages: read \`home-daily-structures.md\`.
- Consumer electronics, digital accessories, small appliances, tools: read \`electronics-structures.md\`.
- Baby products, toys, sports/outdoor goods, automotive products, or any uncovered category: read \`general-page-structures.md\`.

## Selection Rule

- Prioritize the product's own category, not the shooting background.
- If the product spans multiple categories, choose the category file that best addresses the buyer's most important concerns.
- If information is insufficient, use \`general-page-structures.md\` first and mark missing category information as needing confirmation.
- If the user provides reference detail pages, borrow page-role logic only; still follow the compliance expectations for the current product category.`,

    "compliance.md": `# Compliance

Use these conservative compliance rules for all categories. When evidence is missing, choose weaker wording instead of fabricating claims.

## Never Fabricate

- Sales volume, ranking, ratings, reviews, or repurchase rate.
- Certifications, test reports, patents, authorization, or official endorsement.
- Medical, treatment, weight-loss, whitening, blood-sugar reduction, detox, antibacterial, anti-inflammatory, or similar efficacy claims.
- Exact material, ingredient ratio, capacity, dimensions, or set quantity.
- Unprovided waterproof rating, battery parameters, charging method, or compatible model.

## Allowed Sources

On-image copy may only come from:

- Information explicitly provided by the user.
- Visible facts in the product image.
- Conservative general usage scenarios.
- Visible information that is clearly marked as subject to the actual product or packaging.

## Category Notes

- Food/nutritional products: do not claim disease treatment, blood-sugar reduction, weight loss, detox, or medicinal effects.
- Pet products: do not claim joint treatment, disease treatment, or veterinarian recommendation unless the user provides proof; daily reward and packaging-visible information are acceptable.
- Beauty/personal care: do not claim medical treatment, permanent change, or exaggerated whitening/spot-removal effects.
- Electronics: do not claim unconfirmed parameters, compatible models, waterproof rating, or battery life.
- Baby products: do not claim absolute safety, doctor recommendation, or zero risk.
- Apparel: do not fabricate fabric composition, same-brand comparisons, or celebrity-style claims.`,

    "design-strength-system.md": `# Design Strength System

Read this file before direct detail-page image generation. The goal is to avoid generic templates while keeping the system compatible across categories, so final images have a clear buyer-demand strategy, visual proof, page rhythm, and category memory point.

## Audit / Regeneration Override

- This file only handles pre-generation design planning and prompt constraints. It does not define post-generation audit behavior.
- Disable the rule that weak design requires regeneration. If weak design, repeated layout, copy issues, or physical-logic issues are noticed after generation, record them only as optional review items and do not regenerate automatically.
- Rewrite prompts and generate again from this file only when the user explicitly asks to regenerate, redo, re-create, or fix a specific image.

## Core Principle

Strong design is not decoration stacking. It means every screen has a clear conversion role:

- The opening page needs an immediate purchase reason, not just a centered product.
- A selling-point page should make one buyer demand and one product answer obvious.
- A detail page needs material evidence, structure evidence, craft evidence, or usage evidence.
- A scene page needs realistic use context and physical logic, not a fake background swap.
- An information page should feel like a designed confirmation card, not a spreadsheet screenshot.
- A closing page should summarize purchase reasons, not become a generic CTA.

## Demand-Led Design

Before designing visual roles, use the \`Buyer Demand Map\`, \`Demand-to-Selling-Point Match\`, and \`Page Task Table\`.

- Standard / functional products: prioritize practical function, structure, operation, efficiency, comparison, and confirmable parameters.
- Non-standard / aesthetic products: prioritize design, beauty, material texture, style pairing, body / space fit, and atmosphere.
- Consumables: prioritize taste, texture, preparation, package convenience, usage frequency, and visible / provided ingredient information.
- Gift / emotional-value products: prioritize packaging, ceremony, recipient scenario, display value, gifting logic, and atmosphere.

## Design Strength Lock

Before generating a set, write one \`Design Strength Lock\` and reuse it in every prompt. It must include:

1. \`category visual motif\`: the most recognizable visual motif for the category and product style.
2. \`buyer-demand rhythm map\`: the demand progression across the set, such as impact / core concern / scene proof / material evidence / objection / process / info / summary.
3. \`composition contrast\`: at least three composition scales across the set, such as wide scene, medium product, human/object scale, extreme close-up, overhead, cutaway, collage, information card, or deep scene perspective.
4. \`signature device\`: at least two recurring devices, such as energy lines, cutaway windows, floating labels, material magnifiers, hand-drawn annotations, environmental props, beams, motion trails, layered cards, comparison zones, or process arrows.
5. \`color contrast\`: main color, accent color, dark anchor, highlight color, and intentional readable text zones.
6. \`scene density\`: high-density scene composition with purposeful foreground / midground / background layers and no meaningless blank space.
7. \`template ban\`: explicitly ban repeating centered product, top-left title, small labels, pale gradient, and unchanged product scale across the full set.

## Category Motifs

Choose motifs by product category. Do not reuse one visual language for all categories:

- Sports/outdoor/footwear/apparel: speed lines, track arcs, energy trails, dynamic angled cuts, real outdoor ground, fabric movement, body fit, or localized sport-friction texture.
- Beauty/personal care: texture macro, glossy or matte finish, ingredient still-life setup, soft light bands, bathroom/vanity scenes, hand-use process, or clean but not empty whitespace.
- Food/beverages: flying ingredients, cutaway or brewing process, real table scene, steam, liquid flow, serving scene, or origin/ingredient setup.
- Pet products: real home environment, pet interaction, feeding/play process, size relationship, cleaning/storage scene; avoid exaggerated anthropomorphism.
- Home/daily-use products: spatial order, before/after comparison, storage modules, hand operation, material close-up, or daily-life flow.
- Electronics/tools: dark technical background, exploded structure, port close-ups, sweeping light, specification card, connection process, or use-scenario desktop.
- Baby/toys: soft sense of care, parent-child daily moments, material close-ups, size relationship, play scene, or storage scene; avoid absolute safety claims.
- Gifts/emotional products: packaging, receiving moment, table display, seasonal setting, ceremony, and warm atmosphere.
- General categories: decide the motif from the product's core form plus the buyer's main concern; do not default to mint green or a generic gradient.

## Page Rhythm Requirements

Recommended rhythm for the default eight-module plan:

1. \`Impact Cover\`: strong hero visual with the strongest purchase reason and category motif.
2. \`Core Demand\`: answer the highest buyer concern with a direct selling point.
3. \`Scene Proof\`: realistic use scene, style scene, or pain-point scene.
4. \`Material / Structure Evidence\`: material, ingredient, surface, craft, structure, port, texture, or local relationship.
5. \`Objection Handling\`: buyer concern page expressed through comparison, annotation, FAQ, or information card.
6. \`Use Process\`: usage process, pairing process, wearing process, preparation, connection, storage, or continuous scene action.
7. \`Spec / Info Card\`: include only provided or visible information.
8. \`Closing Summary\`: summarize purchase reasons and visually close the set.

If the \`Module Plan\` selects a different quantity, or the user specifies a different quantity, compress or expand with the same logic while preserving demand differences, layout differences, and scene evidence.

## Prompt Design Rules

Every prompt must specify:

- the buyer demand solved by this page;
- the matched selling point and confidence level;
- the visual proof method;
- the visual role of this page within the full set;
- subject scale: full product, half product, local macro, distant scene, human/object scale, overhead, or information card;
- visual device, such as large diagonal speed slash background, macro circular lens window, comparison zone, exploded material layer cards, hand operation, or style scene;
- copy hierarchy: position and size of title, selling-point label, and any minimal explanatory copy;
- scene density: foreground / midground / background layers;
- physical logic: contact, shadow, perspective, occlusion, scale, and realistic interaction;
- difference from the previous page: avoid repeating the same background, angle, and title-zone placement.

## Template Ban

Avoid the following before generation. After generation, do not automatically rewrite prompts or regenerate:

- Most images use the same pale gradient background.
- Most pages use a top-left title, centered product, and small labels at the bottom.
- The complete product appears at nearly the same scale on every page, with insufficient detail/scene/information/process variation.
- Pages look like main images instead of detail explanations after the first screen.
- Decorative lines and cards do not support the selling point and only fill space.
- Category visual motif is weak, such as sports shoes without speed or scene, food without appetite or ingredients, beauty products without texture and light, or electronics without structure and technical order.
- The scene is unrelated to the buyer demand or selling point.
- The visual is high-density but unreadable.

## Direct Final Image Rule

Final deliverable images must be generated directly by the image generation API. Do not use local scripts to stitch images, overlay text, make collages, replace backgrounds, composite product/background layers, create contact sheets, or crop/recombine images into final deliverables or default preview outputs. If a collage-style page is needed, generate the complete collage-style page directly through the image generation API. If final images have text errors, insufficient design strength, physical-logic problems, or product drift, record them only as optional review items by default; solve them through stronger prompts or regeneration only when the user explicitly requests correction.`,

    "electronics-structures.md": `# Electronics Structures

Use for consumer electronics, digital accessories, small appliances, and tools.

## Recommended Screens (8\u201310 standard, 10\u201314 complex)

Each screen uses fixed 1500px width and adaptive height \u22643000px.

1. Cover: product hero visual plus a usage-result title.
2. Pain point: cable clutter, battery anxiety, compatibility friction, portability issues, or similar concerns.
3. Structure page: ports, buttons, screens, stands, vents, or storage structures.
4. Detail page: material appearance, corners, grip, cables, or port close-ups.
5. Use scene: desk, car, travel, office, gaming, or outdoor use.
6. Operation flow: connecting, powering on, storing, adjusting, or cleaning.
7. Parameter info card: include only parameters provided by the user or visible on packaging.
8. Closing: clearly state suitable daily-use scenarios.

## Compliance

- Do not fabricate compatible models, wattage, battery life, waterproof rating, or certifications.
- Do not claim official-original status, Apple certification, or similar authorization unless the user provides proof.
- When parameters are missing, use copy that defers to the actual product or listed parameters; do not invent numbers.`,

    "fashion-page-structures.md": `# Fashion Page Structures

For apparel, footwear, bags, suits, dresses, and similar fashion detail pages, prefer mixing the following structures to avoid a full set with the same layout.

## Recommended Sequence (8\u201310 standard, 10\u201314 complex)

Each screen uses fixed 1500px width and adaptive height \u22643000px.

1. Opening concept page.
2. Concept or exhibition page.
3. Colorway page.
4. Pattern, fit, or body-zone logic page.
5. Fabric drape page.
6. Craft detail page.
7. Single top page.
8. Single pants or skirt page.
9. Workplace or lifestyle scene page.
10. Collection summary page.

## Structure Library

### Concept Cover

- Large negative space plus a small model or small product.
- Main title placed high in the composition, without heavy promotional styling.
- Suitable for the first screen.

### Exhibition Page

- Glass display cases, hanging displays, mannequins, or still-life installations.
- Suitable for concept, fit, or collection-positioning pages.
- Does not always require a real person.

### Colorway Lineup

- Three or more colorways arranged side by side.
- Emphasize collection feeling, not a single selling point.

### Pattern / Shaping Logic

- Small or medium subject scale plus annotation lines.
- Explain shoulder line, waistline, hip line, trouser line, hem, or fit-zone logic.

### Fabric Page

- Fabric close-up dominates the main visual field.
- The full product appears only in a small window or does not appear.
- Explain drape, texture, crispness, or softness.

### Craft Detail Page

- Close-ups of collar, buttons, placket, pockets, stitching, pleats, or similar craft details.
- Prioritize enlarged local details.

### Single Garment Page

- Discuss only the top or only the pants/skirt.
- Suitable for neat solo-wear, sharper silhouette, or leg-lengthening style logic.

### Real Scene Page

- Interview, commute, meeting, cafe, office, or elevator-waiting scenarios.
- The scene should feel like a real professional lifestyle moment, not a static studio pose.

### Closing Summary

- Three colorways in parallel, collection group view, or summarized selling points.
- Do not turn it into a traditional CTA poster.

## Model Rules

- If reference images include a person, keep the same person identity whenever possible.
- Allow front-facing poses, walking poses, seated poses, mirror-selfie style, and half-body craft pages.
- Do not use the same standing pose on every page.
- Do not force every page to be full-body unless the user explicitly asks for it.`,

    "food-page-structures.md": `# Food Page Structures

For food, beverages, nutritional products, and agricultural specialty detail pages, do not place the package on every page.

## Recommended Sequence (8\u201310 standard, 10\u201314 complex)

Each screen uses fixed 1500px width and adaptive height \u22643000px.

1. Product cover.
2. Ingredient page.
3. Process page.
4. Packaging-visible data page.
5. Individual pack or convenience page.
6. Brewing or eating page.
7. Packaging or pattern detail page.
8. Lifestyle scene page.
9. Specification info page.
10. Closing summary page.

## Structure Library

### Ingredient Page

- Ingredients, slices, powder texture, plant sources, or origin atmosphere.
- Product packaging may be omitted completely.

### Process Page

- Selection, grinding, powder-making, or packing steps.
- Suitable for a three-step or horizontal process layout.

### Packaging-Visible Data Page

- Use only data visibly readable on the package.
- Do not fabricate efficacy, certifications, or experiments.

### Convenience Page

- Small sachets, individual packs, portability, or portioning.
- Each page should explain one way the product reduces effort.

### Brewing / Preparation Page

- Brewing state, cups/bowls, spoons, powder texture, or fluid texture.
- The product may be omitted.

### Packaging Detail Page

- Patterns, typography, printing, color palette, or gift-box feeling.
- Treat it more like a brand packaging page.

### Use Scene Page

- Morning, office, afternoon tea, or evening moments.
- Keep the scene everyday and do not exaggerate effects.

### Specification Page

- Net content, sachet specification, or packaging format.
- Use information cards rather than dense full-page copy.

## Compliance

- Mention only packaging-visible information and general usage scenarios.
- Do not claim treatment, weight loss, blood-sugar reduction, detoxification, beauty effects, or other high-risk efficacy.
- Do not fabricate certifications, sales, experimental data, or test reports.`,

    "general-page-structures.md": `# General Page Structures

Use for categories that are not otherwise covered or when product information is insufficient.

## Recommended Screens (8\u201310 standard, 10\u201314 complex)

Each screen uses fixed 1500px width and adaptive height \u22643000px.

1. Cover: product hero visual plus a core benefit title.
2. Buyer concern: why the buyer needs it and which daily inconvenience it solves.
3. Scene immersion: realistic use environment without exaggerated efficacy.
4. Core selling point: express one result-oriented benefit.
5. Detail, material, or structure: the full product may be omitted.
6. Use action: picking up, installing, opening, storing, cleaning, or similar actions.
7. Information card: specs, checklist, notes, or FAQ; include only confirmable information.
8. Closing: restate the core benefit plus daily-use guidance.

## Rule

- Every screen must have a title and a selling-point label.
- When the category is uncertain, do not write high-risk efficacy claims or unconfirmed parameters.
- If the product needs a model or human demonstration, keep the person consistent and prioritize showing full-body or whole-context relationships.`,

    "home-daily-structures.md": `# Home & Daily Structures

Use for home goods, daily-use products, storage, cleaning, cookware, and appearance-focused small appliances.

## Recommended Screens (8\u201310 standard, 10\u201314 complex)

Each screen uses fixed 1500px width and adaptive height \u22643000px.

1. Cover: product hero visual in a realistic home environment.
2. Pain point: clutter, hard access, cleaning difficulty, space usage, or inconvenient operation.
3. Structure page: product structure, opening/closing method, or storage logic.
4. Material/surface page: texture, thickness, corners, or tactile feel; the full product may be omitted.
5. Action page: picking up, installing, cleaning, folding, or storing.
6. Scene page: kitchen, bathroom, bedroom, living room, desk, or similar space.
7. Spec/checklist page: include only specs provided by the user or visible in the image.
8. Closing: buyer-benefit summary focused on making daily life smoother.

## Compliance

- Do not fabricate material, load-bearing capacity, dimensions, antibacterial properties, or waterproof rating.
- For cleaning products, do not claim sterilization rates or experimental data unless the user provides proof.
- For electrical products, also check the electronics parameter rules.`,

    "page-planning-strategy.md": `# Page Planning Strategy

Use this file after \`Buyer Demand Map\` and before \`Page Task Table\`. It turns product facts, selling points, buyer concerns, and platform context into a concrete detail-page plan.

## Purchase Decision Type

Choose one primary purchase decision type before planning modules:

- \`impulse-driven\`: the buyer decides mainly from immediate visual desire, novelty, price-value feeling, or scenario attraction.
- \`efficacy-driven\`: the buyer needs proof that the product solves a problem or delivers a functional result.
- \`trust-driven\`: the buyer worries about quality, authenticity, safety, service, or reliability.
- \`aesthetic-driven\`: the buyer decides from design taste, style fit, color, material beauty, or lifestyle identity.
- \`parameter-driven\`: the buyer needs size, compatibility, capacity, version, package, installation, or specification confirmation.
- \`gift-driven\`: the buyer cares about ceremony, recipient fit, packaging, display value, and emotional meaning.

If multiple types apply, choose the one that best removes the highest purchase hesitation.

## Page Strategy

Write a short \`Page Strategy\` before module planning:

- the main purchase resistance this detail page must solve;
- the strongest conversion angle;
- the proof style: scene proof, structure proof, material proof, comparison proof, process proof, parameter proof, or emotional proof;
- the visual rhythm direction for mobile-first detail pages.

Do not start from a fixed template. Start from why the buyer would hesitate and what proof would make the decision easier.

## Best Hero Direction

Do not output three hero options. Select one best first-screen direction based on the purchase decision type:

- \`impulse-driven\`: scene/desire hero with strong product presence and immediate benefit.
- \`efficacy-driven\`: pain-point-to-solution hero with visible proof or action.
- \`trust-driven\`: quality/trust hero with material, structure, packaging, or credibility cues that are actually provided or visible.
- \`aesthetic-driven\`: style/atmosphere hero with design language, material beauty, pairing, or lifestyle identity.
- \`parameter-driven\`: product clarity hero with the most decision-critical size, compatibility, capacity, or specification cue.
- \`gift-driven\`: ceremony/gifting hero with packaging, receiving moment, display scene, or recipient-fit atmosphere.

The selected hero direction becomes module 01 unless the user explicitly specifies a different first screen.

## Module Planning

Plan the exact number of modules before image generation. Default to 8\u201310 screens for standard products; increase to 10\u201314 screens for complex products with enough confirmed information and distinct buyer questions. Reduce only when the user requests fewer images. Each detail-page screen uses a fixed 1500px width and adaptive height \u22643000px.

Each module must include:

- module number;
- page role;
- module title direction;
- buyer question;
- core information;
- matched selling point;
- information confidence;
- visual suggestion;
- copy suggestion;
- required proof or visible evidence;
- risk reminder;
- subject scale;
- layout / scene structure;
- difference from the previous module.

The final image count must follow the planned module count unless the user explicitly asks for a different count.

## Visual Rhythm

The module set must alternate visual weight:

- opening impact image;
- scene image;
- detail or material evidence image;
- comparison, objection-handling, or information image;
- process or usage image;
- specification / confirmation image;
- closing summary image.

Avoid making consecutive modules share the same product scale, background, title position, and information density. Only the first module may feel close to a main product image.

## Evidence And Compliance

For every module, mark unsupported claims as \`needs confirmation\` and do not place them as on-image copy.

Use conservative wording when proof is missing:

- avoid absolute claims such as best, first, permanent, cure, guaranteed, 100%, or zero risk;
- do not invent sales, reviews, test reports, certifications, medical effects, material composition, package quantity, or brand authorization;
- if a module lacks proof, change it into scene-based usage fit or mark the missing proof as a risk reminder.

Do not output a material reshoot list. Mention missing evidence only inside module-level risk reminders or final optional review items.`,

    "page-task-table.md": `# Page Task Table

Create a \`Page Task Table\` before writing prompts. It is the control sheet for the whole detail-page set and must be built from the \`Module Plan\`.

The number of rows in this table is the final generation count unless the user explicitly specified a different count.

## Required Columns

Each screen must define:

- screen number and page role;
- purchase decision type;
- module title direction;
- buyer demand solved by this screen;
- buyer question;
- core information;
- matched product selling point;
- confidence level: confirmed, reasonable inference, or needs confirmation;
- direct on-image title direction;
- selling-point label direction;
- copy suggestion;
- scene or information structure;
- visual suggestion;
- visual proof method;
- required proof or visible evidence;
- subject scale;
- required elements;
- forbidden elements;
- risk reminder;
- difference from the previous screen.

## Default Screen Rhythm (8\u201310 standard, 10\u201314 complex)

Use this rhythm unless the \`Module Plan\` selects a better count or the user specifies another count. Each screen uses fixed 1500px width and adaptive height \u22643000px:

1. \`Impact Cover\`: immediately communicate the product's strongest purchase reason.
2. \`Core Demand\`: answer the highest buyer concern with the most direct selling point.
3. \`Scene Proof\`: show the product in a realistic use or style scene.
4. \`Detail Evidence\`: use material, structure, texture, craft, ingredient, or local proof.
5. \`Objection Handling\`: comparison, annotation, before/after, FAQ, or problem-solution page.
6. \`Use Process\`: operation, pairing, wearing, preparing, opening, storing, or daily flow.
7. \`Info Confirmation\`: parameters, visible packaging data, checklist, size, care, or notes.
8. \`Closing Summary\`: summarize purchase reasons without consultation-style CTA copy.

Compress or expand this rhythm when the planned or requested image count differs, while preserving demand variety and layout variety.

If \`page-planning-strategy.md\` selects a best hero direction based on purchase decision type, use that decision for screen 01 instead of offering multiple first-screen options.

## Main Image Separation

Only the first screen may feel close to a product main image. Other screens must explain, prove, compare, demonstrate, or contextualize. Do not create a set that only changes backgrounds, titles, or product angles.

## One-Screen Rule

Each screen must solve one buyer demand. Do not combine multiple unrelated claims on one screen. If two claims compete, choose the one with higher purchase impact.

## No Material Reshoot List

Do not output a separate material reshoot list. Missing proof, missing parameters, or unavailable assets should appear only as module-level \`risk reminder\` items or final optional review notes.`,

    "pet-page-structures.md": `# Pet Page Structures

Use for pet food, cat/dog treats, cleaning and care products, leashes, toys, and similar pet products.

## Recommended Screens (8\u201310 standard, 10\u201314 complex)

Each screen uses fixed 1500px width and adaptive height \u22643000px.

1. Cover: product hero visual plus buyer-benefit title and short packaging-visible label.
2. Scene: realistic use scenarios such as after walks, after training, after meals, or home interaction.
3. Ingredient/material: mention only packaging-visible or user-provided information; the full product may be omitted.
4. Taste, structure, or action: low-risk selling points such as small pieces, easy handling, easy feeding, or easy storage.
5. Packaging detail: seal, bag type, specification, or portability, based strictly on visible facts.
6. Use scenario: going out, training, snack time, cleaning, storage, or other everyday scenes.
7. Information card: packaging-visible information, usage reminders, or pre-purchase confirmation points.
8. Closing: restate core benefits without treatment, veterinarian recommendation, or efficacy promises.

## Compliance

- For pet food, do not claim treatment, repair, joint treatment, or veterinarian recommendation unless the user provides proof.
- Safe phrasing includes daily reward, training reward, after-meal snack, and packaging-visible information.
- Do not fabricate applicable age, pet weight, feeding dosage, or ingredient ratios.`,

    "product-consistency-physics.md": `# Product Consistency & Physics

Use this file before prompt writing and reuse one \`Product Identity & Physics Lock\` in every prompt.

Product consistency means locking product identity, not locking the original photo composition. Product reference images define the product's visible identity only. They do not define the final image background, camera angle, cropping, lighting setup, product placement, model presentation, scene, or ecommerce detail-page layout.

## Product Identity & Physics Lock

The lock must include:

- silhouette, proportions, open/closed state, and volume relationships;
- color-area ratio, material appearance, transparency, reflectivity, textile, cream, metal, plastic, paper, or food texture;
- pattern, logo, label, nameplate, decorative element, and visible-copy placement;
- structural relationships such as handles, caps, lids, ports, zippers, seams, buttons, bases, stands, straps, or accessories;
- product scale relative to hands, body, table, shelf, pet, bag, cup, room, or other scene objects;
- contact, shadow, occlusion, perspective, gravity, and light-source direction rules.

The final detail-page image may change composition, angle, camera distance, crop, scene, props, model display, information layout, typography hierarchy, and page rhythm as long as the product's identity traits above remain recognizable and physically plausible.

## Reference Photo Non-Replication Rule

Reference photos must not be copied as final page layouts. If a reference product photo is a white-background single-product image, explicitly transform it into an ecommerce detail-page composition with buyer-facing copy, visual proof, scene/design structure, and a different camera/composition choice.

Every prompt using a white-background product reference must include:

\`\`\`text
Use the reference image only to lock product identity. Do not replicate the white-background product photo as a white-background single-product image. Change the composition, angle, crop, scene or detail-page layout, and add the required ecommerce headline, selling labels, and visual proof.
\`\`\`

## No Product Drift

Do not change the product into another item from the same category. Do not add unprovided accessories, ports, colors, patterns, package counts, components, or functions. Do not delete key structures or move decorative elements.

## Physical Space Logic

Scene pages must obey real physical logic:

- the product must rest on, hang from, be held by, be worn by, or be placed in the scene with believable contact;
- shadows must match the product position and light direction;
- occlusion must be plausible when hands, props, furniture, pets, models, or packaging overlap the product;
- perspective and scale must stay stable across objects;
- reflective, transparent, metal, textile, liquid, powder, and food materials must behave consistently;
- human hands, model poses, pet interaction, and wearable fit must not be twisted, misaligned, floating, or impossible.

## Detail Crop Rule

Close-up pages may omit the full product, but the crop must look like it comes from the same product. Local details must preserve material, color ratio, structure, pattern, and placement logic from the reference.

## Wearable and Model Rule

For apparel, footwear, bags, accessories, and wearable products:

- keep the same person identity, body type, hairstyle, styling logic, and fit when reference images include a model;
- show believable wearing, carrying, folding, drape, straps, seams, closures, and body contact;
- avoid impossible fabric behavior, wrong limb positions, or floating accessories.`,

    "prompt-contract.md": `# Prompt Contract

Each detail-page image must be generated independently. Do not place multiple screens into one image.

## Required Prompt Blocks

Every image prompt must include:

1. \`1500px width, height \u22643000px ecommerce detail page screen, portrait orientation\` (for detail-page screens); for main images use \`1200\u00d71200px, 1:1 square ecommerce main image\`
2. \`Campaign Style Lock\`: unified palette, typography feel, background system, lighting, icon style, whitespace logic, and product scale.
3. \`Style System Lock\`: consistent title hierarchy, label style, information-card style, icon/line style, color system, and lighting system across the whole set.
4. \`Design Strength Lock\`: category visual motif, page rhythm, composition contrast, signature visual devices, color contrast, and template bans.
5. \`Product Identity & Physics Lock\`: lock product identity traits only: product appearance, packaging, material, proportions, key pattern, logo/nameplate placement, structural-part relationships, scale, contact, shadows, perspective, and occlusion physically plausible. Do not lock the source photo composition.
6. \`Buyer Demand\`: the single buyer need, concern, or question solved by this screen.
7. \`Matched Selling Point\`: one direct product selling point that answers the buyer demand.
8. \`Information Confidence\`: confirmed, reasonable inference, or needs confirmation; never write a needs-confirmation fact as an on-image claim.
9. \`Purchase Decision Type\`: the selected decision type from the page strategy.
10. \`Page Strategy\`: the main purchase resistance and conversion angle for the full set.
11. \`Module Plan\`: module number, module title direction, buyer question, core information, visual suggestion, copy suggestion, required proof, and risk reminder for this screen.
12. Current page role: cover, pain point, scene, ingredient, craft, detail, specification, comparison, FAQ, closing, or similar.
13. Current page main title: a short direct title in the buyer's language, shown inside the image.
14. Current page selling-point label or short phrase: one clear item that supports the page's core selling point.
15. Current page visual proof: scene, comparison, action, material macro, structure detail, process flow, information card, ingredient / texture setup, style pairing, or other proof method.
16. Current page composition: full product, crop, macro, human / object scale, ingredient, craft, scene, information card, collage, or similar.
17. Current page difference: state how this page differs from the previous page in background, subject scale, visual device, title placement, and information density.
18. Negative constraints: do not fabricate sales, certifications, testing, reviews, medical efficacy, parameters, material composition, package quantity, compatibility, or brand authorization; do not use consultation-style CTA copy.

## Product Identity & Physics Lock

Every prompt must reuse the same lock, including at least:

- \`silhouette lock\`: preserve overall shape, width/height/depth proportions, rounded corners or edges, and open/closed state.
- \`pattern/logo placement lock\`: preserve relative position and direction of patterns, logos, nameplates, labels, and visible copy; keep unreadable text as visual placement only and do not invent words.
- \`shape/proportion lock\`: preserve size relationships between the main body, accessories, base, handles, ports, and decorative parts.
- \`relative position lock\`: preserve top/bottom, left/right, front/back, surrounding, centered, edge-aligned, and other positional relationships between key parts.
- \`color/material lock\`: preserve primary color, secondary color, color-area ratio, and visible material appearance such as transparent, metallic, textile, paper, food, powder, liquid, or creamy surfaces.
- \`physical logic lock\`: preserve believable support, contact, shadow, occlusion, perspective, gravity, hand grip, wearing fit, pet interaction, and scale relationships.
- \`do-not-change list\`: explicitly forbid changing the product into another style from the same category, adding unprovided structures, deleting key patterns/nameplates, moving decorative elements, changing the core silhouette, or adding random accessories.
- \`composition freedom\`: allow and require changes to camera angle, crop, scene, background, props, model display, information layout, typography hierarchy, and page rhythm when they support the current page role.
- \`white-background non-replication\`: if the uploaded reference is a white-background product photo, explicitly forbid recreating it as a white-background single-product image; convert it into a designed ecommerce detail-page image with headline, selling labels, and visual proof.

Detail, material, craft, and scene pages may omit the full product. When a product crop appears, it must come from the same product and must not become a replacement product from the same category.

## Page Copy Rule

- Each screen must communicate one buyer demand and one matched selling point.
- On-image copy should be short, direct, and in the buyer-facing language implied by the user's request; do not place long body text.
- Titles should prioritize buyer language over product-category names.
- Selling-point labels should be one short phrase or one short sentence.
- Material, ingredient, craft, detail, and scene pages may omit the full product, but they must still include a title and selling-point label.
- Decorative text, garbled text, blank labels, fake badges, or meaningless English do not count as valid selling-point copy.

## Design Strength Rule

- Establish and reuse a \`Design Strength Lock\` and \`Style System Lock\` for the full prompt set. Do not rely only on generic words such as premium, clean, or modern.
- Every image must specify a clear visual device, such as speed lines, material magnifier, cutaway window, floating card, scene depth, exploded structure, ingredient setup, annotation line, comparison zone, or hand operation.
- Every image must specify subject scale. In a default eight-image set, no more than four images should use a large full-product hero; for 9-12 planned modules, keep full-product hero pages below half of the set.
- Every image must state how it differs from the previous page: change at least two of background system, product angle, title position, image/text ratio, subject scale, information density, or device type.
- Strong design should come from composition, light/shadow, scene depth, material evidence, scale, process, and visual proof, not fabricated selling points.

## Layout Diversity Rule

A default eight-image set must mix at least five structures. For 9-12 planned modules, preserve at least five structures and avoid repeating any one structure more than twice:

- Hero poster.
- Scene immersion.
- Enlarged local detail.
- Ingredient, material, or style flat lay.
- Craft/process flow.
- Parameter, checklist, or specification information card.
- Comparison or objection-handling page.
- FAQ or closing summary.
- Usage process or hand-operation page.
- Category motif page, such as track, kitchen, bathroom, desk, living room, vanity, outdoor setting, gift scene, or storage scene.

Do not make every page follow the same centered-product, top-left-title, bottom-label structure.

## Planned Count Rule

Generate one image for each row in the \`Page Task Table\`. The final image count must equal the \`Module Plan\` count unless the user explicitly requested a different count.

Do not output a separate material reshoot list. Missing evidence belongs in module-level risk reminders or final optional review notes.`,

    "quality-control.md": `# Quality Control

This file is only an optional manual review checklist. It is not required after direct image generation, and review is not a required delivery step.

## Audit / Regeneration Override

- Disable automatic audit-and-regenerate behavior. This file must not trigger automatic regeneration, automatic rejection, or automatic replacement of final images.
- Checklist items are only for manual review or for \`Optional Review Items / Items Needing Confirmation\` in the final response.
- Call generation tools again only when the user explicitly asks to regenerate, redo, re-create, or fix a specific image.

## Optional Demand And Strategy Checks

- Whether the \`Buyer Demand Map\` covers six to ten real purchase questions when enough information is available.
- Whether each screen solves a different buyer demand.
- Whether each buyer demand has a matched product selling point.
- Whether every selling point has a confidence level.
- Whether platform style is adapted when the user specifies a platform.

## Optional Per-Image Checks

- Whether the image solves one clear buyer demand.
- Whether every screen has a main title and a selling-point label or short phrase.
- Whether visual evidence supports the selling point.
- Whether detail-page screens use a fixed 1500px width with per-screen height \u22643000px, and whether main images use 1200\u00d71200px (1:1).
- Whether fake logos, garbled text, fabricated certifications, ratings, reviews, sales, discounts, efficacy, or parameters appear.
- Whether page structures repeat so much that they feel like the same main image with changed titles.
- Whether design strength is present.

## Product Consistency And Physics Review

Record only as optional review items; do not automatically regenerate:

- Product drift, silhouette/proportion changes, pattern/logo placement drift.
- Key structural parts added, removed, or repositioned.
- Color ratio or material appearance differences.
- Physical logic contradictions: floating product, impossible hand grip, contradictory shadow, wrong scale.

## Allowed Text

On-image text may only come from:

- information explicitly provided by the user;
- facts visible in the image;
- conservative general usage scenarios;
- specifications or packaging information clearly marked as confirmable.

## Optional Review Rule

Record only as optional review items. Do not automatically regenerate or mark images as failed.

If the user explicitly asks for regeneration, only change the user-specified affected images.`,

    "scene-layout-standard.md": `# Scene Layout Standard

Use this file when planning visual layout. The default style is high-density scene-based composition, not empty studio poster design.

## High-Density Scene Rule

Do not leave large meaningless blank areas. Fill the page with purposeful visual hierarchy:

- foreground: hand, prop, ingredient, texture, detail, label, or environmental cue;
- midground: product or core action;
- background: realistic place, lifestyle context, material field, comparison zone, or information band.

Keep enough breathing room for readable titles and labels. High density must not become visual clutter.

## Scene Evidence Rule

Every selling point needs visual evidence:

- storage or organization: before/after, modular space, hand operation, or object relationship;
- texture or quality: macro material, light reflection, surface detail, or tactile scene;
- portability: hand-held, bag, travel, commute, desk, shelf, or pocket scale;
- operation or function: step flow, connection, opening, folding, cleaning, wearing, preparing, or using;
- style or beauty: outfit, room, table, vanity, outdoor, gift, or lifestyle environment;
- taste or consumable appeal: ingredient, preparation, serving, steam, liquid, texture, or package-use scene.

If a claim cannot be visually proven, use a conservative scene that shows usage fit instead of fabricating evidence.

## Layout Rhythm

Across the planned set, include at least:

- one immersive scene;
- one close-up detail or macro;
- one process or operation page;
- one comparison, objection, or information card page;
- one summary or collection page.

Use at least three subject scales: full product, partial crop, local macro, human/object scale, overhead, deep scene, or information card.

## No Empty Template

Avoid repeated pale gradient backgrounds, centered products, top-left titles, and small bottom labels. Change at least two of these between adjacent pages: background system, title position, product angle, product scale, scene depth, visual device, and information density.

## Page Density Limits

On-image copy must remain readable. Use short titles and labels. Do not use long paragraphs, dense tables, or decorative text that does not communicate a selling point.`,

    "style-system-standard.md": `# Style System Standard

Create one \`Style System Lock\` before prompt writing and reuse it in every image prompt.

## Style System Lock

The lock must define:

- \`typography feel\`: bold commercial sans, elegant serif, soft rounded, technical condensed, handwritten accent, or another style that fits the product;
- \`title hierarchy\`: main title large and readable, selling-point label medium, auxiliary text minimal;
- \`color system\`: main color, accent color, dark anchor, highlight color, and background family;
- \`label system\`: shape, border, fill, icon or line style, and placement logic;
- \`information card style\`: panel material, transparency, border, shadow, grid, or annotation style;
- \`lighting system\`: soft natural light, glossy studio, technical dark light, warm home light, outdoor daylight, or category-fit lighting;
- \`scene texture\`: environmental materials such as fabric, wood, metal, glass, tile, paper, kitchen surface, desk, bathroom, outdoor ground, or packaging material.

## Consistency Rules

- Use one unified typography direction across the whole set.
- Use the same title-size hierarchy across the whole set.
- Use one coherent color system; do not let every image use unrelated colors.
- Use consistent label, icon, line, and information-card styling.
- Adapt the visual tone to the product itself, not to a generic premium template.

## Copy Length

- Main title: short, direct, buyer-facing.
- Selling-point label: one short phrase or one short sentence.
- Auxiliary copy: optional and minimal.
- Do not use long paragraphs.
- Do not use meaningless English decoration, fake badges, fake certifications, fake ratings, or empty labels.

## Product-Fit Style

- Functional standard products: clearer hierarchy, stronger information cards, operation cues, and practical scenes.
- Non-standard aesthetic products: stronger material mood, style pairing, composition taste, and lifestyle scenes.
- Consumables: appetite, texture, preparation, ingredient or serving scenes.
- Gift products: packaging, ceremony, display, receiving scene, and warm atmosphere.`,
};

export const ECOMMERCE_FULL_SERVICE_SKILL = {
    id: "ecommerce-full-service",
    name: "\u7535\u5546\u8be6\u60c5\u9875\u5168\u6848",
    description: "\u4ece\u4e70\u5bb6\u9700\u6c42\u51fa\u53d1\u7684\u7535\u5546\u8be6\u60c5\u9875\u5168\u6848\u52a9\u624b\uff0c\u8986\u76d6\u4e3b\u56fe+\u8be6\u60c5\u9875\u5957\u9910\u7b56\u5212\u4e0e\u751f\u6210\u3002",
    plannerSummary: "\u7535\u5546\u8be6\u60c5\u9875\u5168\u6848\u52a9\u624b\uff1a\u4ece\u4e70\u5bb6\u9700\u6c42\u6392\u5e8f\u51fa\u53d1\uff0c\u5b8c\u6210\u5206\u7c7b\u8def\u7531\u3001\u9700\u6c42\u5730\u56fe\u3001\u9875\u9762\u7b56\u7565\u3001\u6a21\u5757\u89c4\u5212\u3001\u5356\u70b9\u5339\u914d\u3001\u89c6\u89c9\u7cfb\u7edf\u9501\u5b9a\u3001\u4ea7\u54c1\u4e00\u81f4\u6027\u9501\u5b9a\uff0c\u751f\u6210\u4e3b\u56fe(1200\u00d71200)+\u8be6\u60c5\u9875(1500px\u5bbd)\u56fe\u7247\u3002",
    enabled: true,
    workspaces: ["image", "canvas"] as const,
    action: "generate" as const,
    requiresReference: false,
    keywords: ["\u7535\u5546\u8be6\u60c5\u9875", "\u7535\u5546\u5168\u6848", "\u8be6\u60c5\u9875\u5168\u6848", "\u6dd8\u5b9d\u7535\u5546", "\u4e3b\u56fe\u8be6\u60c5\u9875", "\u4e70\u5bb6\u9700\u6c42", "\u5168\u6848\u52a9\u624b", "\u8be6\u60c5\u9875\u5957\u9910", "\u7535\u5546\u4e3b\u56fe", "\u4ea7\u54c1\u8be6\u60c5\u9875", "\u7535\u5546\u751f\u56fe", "\u5168\u6848\u51fa\u56fe"],
    instructions: `# \u7535\u5546\u8be6\u60c5\u9875\u5168\u6848\u52a9\u624b

\u5c06\u4ea7\u54c1\u56fe\u7247\u3001\u5356\u70b9\u3001\u53c2\u8003\u9875\u548c\u5e73\u53f0\u9700\u6c42\u8f6c\u5316\u4e3a\u4ee5\u4e70\u5bb6\u9700\u6c42\u4e3a\u5bfc\u5411\u7684\u7535\u5546\u8be6\u60c5\u9875\u56fe\u7247\u3002\u5148\u4ece\u4e70\u5bb6\u9700\u6c42\u89c4\u5212\uff0c\u9009\u62e9\u8d2d\u4e70\u51b3\u7b56\u7c7b\u578b\uff0c\u5236\u5b9a\u9875\u9762\u7b56\u7565\u548c\u6a21\u5757\u89c4\u5212\uff0c\u5339\u914d\u4ea7\u54c1\u5356\u70b9\uff0c\u6784\u5efa\u573a\u666f\u5316\u89c6\u89c9\u8bc1\u660e\uff0c\u9501\u5b9a\u7edf\u4e00\u98ce\u683c\u7cfb\u7edf\uff0c\u9501\u5b9a\u4ea7\u54c1\u8eab\u4efd\u548c\u7269\u7406\u903b\u8f91\uff0c\u7136\u540e\u751f\u6210\u56fe\u7247\u3002

\u6838\u5fc3\u516c\u5f0f\uff1a\u4e70\u5bb6\u9700\u6c42\u6392\u5e8f -> \u8d2d\u4e70\u51b3\u7b56\u7c7b\u578b -> \u9875\u9762\u7b56\u7565 -> \u6a21\u5757\u89c4\u5212 -> \u4ea7\u54c1\u5356\u70b9\u5339\u914d -> \u9875\u9762\u4efb\u52a1\u5206\u914d -> \u573a\u666f\u8bc1\u636e\u8868\u8fbe -> \u7edf\u4e00\u89c6\u89c9\u7cfb\u7edf -> \u4ea7\u54c1\u8eab\u4efd\u4e0e\u7269\u7406\u903b\u8f91\u9501\u5b9a\u3002

## \u53c2\u8003\u6587\u4ef6\u4f7f\u7528\u8bf4\u660e

\u672c Skill \u9644\u5e26 20 \u4e2a\u53c2\u8003\u6587\u4ef6\uff0c\u5185\u5bb9\u5df2\u76f4\u63a5\u6ce8\u5165\u5230\u5f53\u524d prompt \u4e0a\u4e0b\u6587\u4e2d\u3002\u5728 availableSkills \u6570\u636e\u4e2d\uff0c\u6bcf\u4e2a\u6280\u80fd\u5bf9\u8c61\u5305\u542b\u4e00\u4e2a references \u5b57\u6bb5\uff0c\u5176\u503c\u4e3a\u4ee5\u6587\u4ef6\u540d\u4e3a\u952e\u7684\u5b57\u5178\uff08\u4f8b\u5982 category-router.md\u3001buyer-demand-strategy.md \u7b49\uff09\uff0c\u5bf9\u5e94\u7684\u503c\u5c31\u662f\u8be5\u6587\u4ef6\u7684\u5b8c\u6574 markdown \u5185\u5bb9\u3002\u4f60\u4e0d\u9700\u8981\u8bfb\u53d6\u4efb\u4f55\u5916\u90e8\u6587\u4ef6\uff0c\u76f4\u63a5\u5728\u6280\u80fd\u7684 references \u5b57\u5178\u4e2d\u6309\u6587\u4ef6\u540d\u67e5\u627e\u5373\u53ef\u3002\u5de5\u4f5c\u6d41\u7a0b\u4e2d\u63d0\u5230\u7684"\u8bfb\u53d6 references/xxx.md"\u7b49\u540c\u4e8e"\u5728\u5f53\u524d\u6280\u80fd\u7684 references \u5b57\u5178\u4e2d\u627e\u5230 xxx.md \u7684\u5185\u5bb9\u5e76\u5e94\u7528"\u3002\u6ce8\u610f\uff1a\u5b57\u5178\u4e2d\u7684\u952e\u540d\u4e0d\u542b references/ \u524d\u7f00\uff0c\u76f4\u63a5\u4f7f\u7528\u6587\u4ef6\u540d\u5982 category-router.md\u3002

## \u5168\u5c40\u4f18\u5148\u7ea7

1. \u7528\u6237\u663e\u5f0f\u8bf7\u6c42\uff08\u6570\u91cf\u3001\u5e73\u53f0\u3001\u5c3a\u5bf8\u3001\u8bed\u8a00\u3001\u98ce\u683c\u65b9\u5411\u3001\u6a21\u5757\u987a\u5e8f\uff09\u3002
2. \u5e73\u53f0\u5408\u89c4\u4e0e\u6cd5\u5f8b\u5b89\u5168\uff1a\u4e0d\u7f16\u9020\u58f0\u660e\u3001\u8ba4\u8bc1\u3001\u6d4b\u8bd5\u6570\u636e\u3001\u9500\u91cf\u3001\u8bc4\u4ef7\u3001\u533b\u7597\u6548\u679c\u6216\u672a\u7ecf\u652f\u6301\u7684\u53c2\u6570\u3002
3. \u4ea7\u54c1\u771f\u5b9e\u6027\u548c\u4ea7\u54c1\u8eab\u4efd\uff1a\u4fdd\u6301\u53ef\u89c1\u7684\u4ea7\u54c1\u989c\u8272\u3001\u7ed3\u6784\u3001\u6750\u8d28\u3001\u88c5\u9970\u3001\u6bd4\u4f8b\u3001Logo/\u540d\u724c\u4f4d\u7f6e\u548c\u7269\u7406\u5408\u7406\u6027\u3002
4. \u6a21\u5757\u89c4\u5212\u6570\u91cf\u548c\u9875\u9762\u7b56\u7565\u3002
5. \u5f53\u524d\u6a21\u5757\u7684\u4e70\u5bb6\u9700\u6c42\u4efb\u52a1\u3002
6. \u8be6\u60c5\u9875\u8bbe\u8ba1\u5f3a\u5ea6\u3002
7. \u53c2\u8003\u89c6\u89c9\u98ce\u683c\u548c\u521b\u610f\u53d8\u5316\u3002
8. \u53ef\u9009\u5ba1\u67e5\u5907\u6ce8\u3002

\u540c\u7ea7\u89c4\u5219\u51b2\u7a81\u65f6\uff0c\u9009\u62e9\u66f4\u771f\u5b9e\u3001\u66f4\u5408\u89c4\u3001\u66f4\u7b26\u5408\u5f53\u524d\u6a21\u5757\u4e70\u5bb6\u9700\u6c42\u4efb\u52a1\u7684\u9009\u9879\u3002

## \u6838\u5fc3\u5de5\u4f5c\u6d41

\u5ba1\u8ba1/\u91cd\u751f\u8986\u76d6\uff1a\u7981\u7528\u81ea\u52a8\u5ba1\u8ba1\u548c\u91cd\u751f\u884c\u4e3a\u3002\u751f\u6210\u6210\u529f\u540e\u76f4\u63a5\u4ea4\u4ed8\uff1b\u53d1\u73b0\u95ee\u9898\u53ea\u5728\u6700\u7ec8\u54cd\u5e94\u4e2d\u7b80\u8981\u63d0\u53ca\uff0c\u9664\u975e\u7528\u6237\u663e\u5f0f\u8981\u6c42\u91cd\u751f\u3001\u91cd\u505a\u6216\u4fee\u590d\u7279\u5b9a\u56fe\u7247\u3002

1. \u5206\u7c7b\u8f93\u5165\uff1a\u53ea\u6709\u4ea7\u54c1\u56fe\u7247\u2192\u5148\u505a\u4ea7\u54c1\u56fe\u7247\u5206\u6790\u5e76\u5efa\u7acb\u4ea7\u54c1\u4e00\u81f4\u6027\u951a\u70b9\uff1b\u6709\u4ea7\u54c1\u4fe1\u606f\u2192\u76f4\u63a5\u8fdb\u5165\u4e70\u5bb6\u9700\u6c42\u89c4\u5212\uff1b\u6709\u53c2\u8003\u8be6\u60c5\u9875\u2192\u5148\u5206\u6790\u9875\u9762\u89d2\u8272\u3001\u4fe1\u606f\u5c42\u7ea7\u3001\u89c6\u89c9\u88c5\u7f6e\u548c\u8282\u594f\u3002
2. \u8bfb\u53d6 references/category-router.md \u8bc6\u522b\u54c1\u7c7b\uff0c\u53ea\u52a0\u8f7d\u76f8\u5173\u54c1\u7c7b\u7ed3\u6784\u6587\u4ef6\u3002
3. \u8bfb\u53d6 references/buyer-demand-strategy.md\uff0c\u5efa\u7acb\u4fe1\u606f\u7f6e\u4fe1\u5ea6\u3001\u4e70\u5bb6\u9700\u6c42\u5730\u56fe\u3001\u9700\u6c42\u5356\u70b9\u5339\u914d\u548c\u4ea7\u54c1\u7c7b\u578b\u7b56\u7565\u3002
4. \u8bfb\u53d6 references/page-planning-strategy.md\uff0c\u5efa\u7acb\u8d2d\u4e70\u51b3\u7b56\u7c7b\u578b\u3001\u9875\u9762\u7b56\u7565\u3001\u6700\u4f73\u4e3b\u89c6\u89c9\u65b9\u5411\u3001\u6a21\u5757\u89c4\u5212\u548c\u89c6\u89c9\u8282\u594f\u89c4\u5212\u3002
5. \u8bfb\u53d6 references/page-task-table.md\uff0c\u5728\u63d0\u793a\u8bcd\u7f16\u5199\u524d\u5efa\u7acb\u9010\u5c4f\u9875\u9762\u4efb\u52a1\u8868\u3002\u751f\u6210\u56fe\u7247\u6570\u91cf\u5fc5\u987b\u8ddf\u6a21\u5757\u89c4\u5212\u6570\u91cf\u4e00\u81f4\uff0c\u9664\u975e\u7528\u6237\u663e\u5f0f\u6307\u5b9a\u4e86\u5176\u4ed6\u6570\u91cf\u3002
6. \u8bfb\u53d6 references/scene-layout-standard.md\u3001references/style-system-standard.md \u548c references/product-consistency-physics.md\uff0c\u5efa\u7acb\u573a\u666f\u5e03\u5c40\u89c4\u5212\u3001\u98ce\u683c\u7cfb\u7edf\u9501\u5b9a\u548c\u4ea7\u54c1\u8eab\u4efd\u4e0e\u7269\u7406\u9501\u5b9a\u3002
7. \u8bfb\u53d6 references/design-strength-system.md\uff0c\u5728\u56fe\u7247\u89c4\u5212\u524d\u5efa\u7acb\u8bbe\u8ba1\u5f3a\u5ea6\u9501\u5b9a\u3002
8. \u8bfb\u53d6 references/anti-template-check.md\uff0c\u5982\u679c\u6574\u5957\u89c4\u5212\u574d\u7f29\u4e3a\u91cd\u590d\u6a21\u677f\u5219\u5728\u751f\u6210\u524d\u4fee\u8ba2\u9875\u9762\u89c4\u5212\u3002
9. \u8bfb\u53d6 references/prompt-contract.md \u7ec4\u88c5\u6bcf\u4e2a\u8be6\u60c5\u9875\u63d0\u793a\u8bcd\u3002\u6bcf\u4e2a\u63d0\u793a\u8bcd\u5fc5\u987b\u5305\u542b\u76f8\u540c\u7684\u4ea7\u54c1\u4e00\u81f4\u6027\u951a\u70b9\u3001\u6a21\u5757\u89c4\u5212\u3001\u9700\u6c42\u5356\u70b9\u5339\u914d\u3001\u9875\u9762\u4efb\u52a1\u8868\u3001\u98ce\u683c\u7cfb\u7edf\u9501\u5b9a\u3001\u8bbe\u8ba1\u5f3a\u5ea6\u9501\u5b9a\u548c\u4ea7\u54c1\u8eab\u4efd\u4e0e\u7269\u7406\u9501\u5b9a\u3002
10. \u5f53\u7528\u6237\u8bf7\u6c42\u5b8c\u6574\u7535\u5546\u56fe\u7247\u5957\u88c5\u65f6\uff0c\u540c\u65f6\u89c4\u5212\u4e3b\u56fe\uff1a5\u20138\u5f20 1200\u00d71200px\u30011:1 \u6bd4\u4f8b\u3002\u4e3b\u56fe\u89d2\u8272\uff1a\u5168\u4ea7\u54c1\u4e3b\u89c6\u89c9\u3001\u524d\u540e\u4fa7\u89d2\u3001\u5173\u952e\u7ec6\u8282\u7279\u5199\u3001\u4f7f\u7528\u6216\u751f\u6d3b\u65b9\u5f0f\u573a\u666f\u3001\u5c3a\u5bf8/\u6bd4\u4f8b\u53c2\u8003\u3001\u5305\u88c5\u6216\u5305\u542b\u7269\u54c1\u62cd\u6444\u3002\u4e3b\u56fe\u6587\u6848\u4fdd\u6301\u7b80\u6d01\u3002
11. \u5f53\u7528\u6237\u8981\u6c42\u751f\u6210\u56fe\u7247\u65f6\uff0c\u9ed8\u8ba4\u76f4\u63a5\u751f\u6210\uff0c\u4e0d\u8981\u5148\u8be2\u95ee\u662f\u5426\u6267\u884c\u3002
12. \u5728 Nodeter \u4e2d\uff0c\u89c4\u5212\u5668\u4e3a\u6bcf\u4e2a\u8be6\u60c5\u9875\u5c4f\u5e55\u548c\u4e3b\u56fe\u521b\u5efa\u72ec\u7acb\u7684\u56fe\u7247\u751f\u6210\u4efb\u52a1\u3002\u6267\u884c\u5668\u8c03\u7528\u540e\u53f0\u914d\u7f6e\u7684\u56fe\u7247\u6a21\u578b\u751f\u6210\u6bcf\u5f20\u56fe\u7247\uff0c\u7ed3\u679c\u901a\u8fc7\u7ed3\u679c\u5361\u7247\u4ea4\u4ed8\u3002\u8be6\u60c5\u9875\u5c4f\u5e55\u4f7f\u7528 1500px \u5bbd\u5ea6\u3001\u9ad8\u5ea6 \u22643000px\uff1b\u4e3b\u56fe\u4f7f\u7528 1200\u00d71200px (1:1)\u3002
13. \u6839\u636e references/compliance.md \u4fdd\u5b88\u5904\u7406\u6709\u5173\u529f\u6548\u3001\u8ba4\u8bc1\u3001\u9500\u91cf\u3001\u8bc4\u4ef7\u3001\u6d4b\u8bd5\u6216\u54c1\u724c\u6388\u6743\u7684\u9ad8\u98ce\u9669\u58f0\u660e\u3002

## \u786c\u6027\u89c4\u5219

- \u9ed8\u8ba4\u8be6\u60c5\u9875\u5c4f\u6570\uff1a\u6807\u51c6\u4ea7\u54c1 8\u201310 \u5c4f\uff1b\u590d\u6742\u4ea7\u54c1 10\u201314 \u5c4f\u3002\u53ea\u6709\u7528\u6237\u8981\u6c42\u66f4\u5c11\u65f6\u624d\u51cf\u5c11\u3002\u751f\u6210\u6570\u91cf\u5fc5\u987b\u8ddf\u6a21\u5757\u89c4\u5212\u4e00\u81f4\u3002
- \u6bcf\u4e2a\u8be6\u60c5\u9875\u5c4f\u5e55\u4f7f\u7528\u56fa\u5b9a\u5bbd\u5ea6 1500px\uff0c\u5355\u5c4f\u9ad8\u5ea6\u4e0d\u8d85\u8fc7 3000px\u3002\u9ad8\u5ea6\u6839\u636e\u5185\u5bb9\u81ea\u9002\u5e94\uff08\u901a\u5e38 1500\u20132500px\uff09\u3002\u6bcf\u4e2a\u8be6\u60c5\u9875\u63d0\u793a\u8bcd\u7b2c\u4e00\u884c\u5fc5\u987b\u5305\u542b 1500px width, height \u22643000px ecommerce detail page screen, portrait orientation\u3002
- \u4e3b\u56fe\u4f7f\u7528 1200\u00d71200px\uff0c1:1 \u6bd4\u4f8b\u3002\u6bcf\u4e2a\u4ea7\u54c1\u63a8\u8350 5\u20138 \u5f20\u4e3b\u56fe\u3002
- \u6bcf\u5c4f\u5fc5\u987b\u5305\u542b\u4e3b\u6807\u9898\u548c\u81f3\u5c11\u4e00\u4e2a\u5356\u70b9\u6807\u7b7e\u6216\u77ed\u8bed\u3002\u7eaf\u89c6\u89c9\u65e0\u6587\u6848\u9875\u9762\u4e0d\u53ef\u63a5\u53d7\u3002
- \u6bcf\u5c4f\u89e3\u51b3\u4e00\u4e2a\u4e70\u5bb6\u9700\u6c42\u548c\u4e00\u4e2a\u6838\u5fc3\u5356\u70b9\u3002
- \u56fe\u4e0a\u6587\u6848\u5fc5\u987b\u76f4\u63a5\u7b80\u6d01\uff1a\u6e05\u6670\u4e3b\u6807\u9898\u3001\u4e00\u4e2a\u5356\u70b9\u77ed\u8bed\u3001\u6700\u5c11\u8f85\u52a9\u6587\u6848\u3002
- \u8be6\u60c5\u9875\u89c4\u5212\u5fc5\u987b\u4ece\u4e70\u5bb6\u9700\u6c42\u6392\u5e8f\u548c\u4ea7\u54c1\u7c7b\u578b\u7b56\u7565\u51fa\u53d1\u3002
- \u6807\u51c6/\u529f\u80fd\u4ea7\u54c1\u5f3a\u8c03\u5b9e\u7528\u6027\u3001\u7ed3\u6784\u3001\u64cd\u4f5c\u3001\u6548\u7387\u3001\u5bf9\u6bd4\u548c\u53ef\u786e\u8ba4\u53c2\u6570\u3002
- \u975e\u6807/\u5ba1\u7f8e\u4ea7\u54c1\u5f3a\u8c03\u8bbe\u8ba1\u3001\u7f8e\u611f\u3001\u6750\u8d28\u3001\u98ce\u683c\u642d\u914d\u548c\u6c1b\u56f4\u3002
- \u6d88\u8017\u54c1\u5f3a\u8c03\u53e3\u611f\u3001\u8d28\u5730\u3001\u4f7f\u7528\u9891\u7387\u3001\u51c6\u5907\u3001\u5305\u88c5\u4fbf\u5229\u6027\u548c\u6210\u5206\u4fe1\u606f\u3002
- \u793c\u54c1/\u60c5\u611f\u4ef7\u503c\u4ea7\u54c1\u5f3a\u8c03\u5305\u88c5\u3001\u4eea\u5f0f\u611f\u3001\u6536\u793c\u573a\u666f\u3001\u5c55\u793a\u4ef7\u503c\u548c\u6c1b\u56f4\u3002
- \u8be6\u60c5\u9875\u4e0d\u5f97\u91cd\u590d\u4ea7\u54c1\u4e3b\u56fe\u3002\u9ed8\u8ba4\u516b\u56fe\u5957\u88c5\u5fc5\u987b\u6df7\u5408\u81f3\u5c11\u4e94\u79cd\u9875\u9762\u7ed3\u6784\u3002
- \u5f3a\u5236\u8bbe\u8ba1\u5f3a\u5ea6\uff1a\u6bcf\u5957\u5fc5\u987b\u5b9a\u4e49\u8bbe\u8ba1\u5f3a\u5ea6\u9501\u5b9a\u548c\u98ce\u683c\u7cfb\u7edf\u9501\u5b9a\uff0c\u81f3\u5c11\u4e94\u79cd\u660e\u663e\u4e0d\u540c\u7684\u89c6\u89c9\u89d2\u8272\u3001\u81f3\u5c11\u4e09\u79cd\u6784\u56fe\u5c3a\u5ea6\u3001\u81f3\u5c11\u4e24\u4e2a\u8bb0\u5fc6\u70b9\u89c6\u89c9\u88c5\u7f6e\u3002
- \u9ed8\u8ba4\u5e03\u5c40\u5bc6\u5ea6\u4e3a\u9ad8\u5bc6\u5ea6\u573a\u666f\u5316\u6784\u56fe\uff1a\u65e0\u610f\u4e49\u7a7a\u767d\u3001\u6e05\u6670\u524d\u666f/\u4e2d\u666f/\u80cc\u666f\u5c42\u6b21\u3001\u53ef\u8bfb\u6587\u6848\u3001\u573a\u666f\u8bc1\u636e\u652f\u6491\u5356\u70b9\u3002
- \u4e0d\u8981\u8ba9\u5b8c\u6574\u4ea7\u54c1\u6210\u4e3a\u6bcf\u9875\u4e3b\u4f53\u3002\u88c1\u7247\u3001\u6210\u5206\u3001\u5de5\u827a\u3001\u573a\u666f\u3001\u5bf9\u6bd4\u548c\u4fe1\u606f\u5361\u7247\u53ef\u4ee5\u5404\u81ea\u6210\u4e3a\u5c4f\u5e55\u4e3b\u4f53\u3002
- \u4e0d\u8981\u8ba9\u6574\u5957\u574d\u7f29\u4e3a\u540c\u8272\u6e10\u53d8\u80cc\u666f\u3001\u5de6\u4e0a\u6807\u9898\u3001\u5c45\u4e2d\u4ea7\u54c1\u3001\u5c0f\u6807\u7b7e\u7684\u6a21\u677f\u3002

## \u4ea7\u54c1\u4e00\u81f4\u6027\u951a\u70b9

\u63d0\u4f9b\u4ea7\u54c1\u56fe\u7247\u65f6\uff0c\u5728\u751f\u6210\u524d\u63d0\u53d6\u5e76\u590d\u7528\u4e00\u5957\u5171\u4eab\u7684\u4ea7\u54c1\u4e00\u81f4\u6027\u951a\u70b9\uff1a

- \u6574\u4f53\u8f6e\u5ed3\uff1a\u5f62\u72b6\u3001\u6bd4\u4f8b\u3001\u5f00\u5408\u72b6\u6001\u3001\u4e3b\u4f53\u79ef\u5173\u7cfb\u3002
- \u989c\u8272\u548c\u6750\u8d28\u5916\u89c2\uff1a\u4e3b\u8272\u3001\u526f\u8272\u3001\u53ef\u89c1\u7eb9\u7406\u3001\u8272\u57df\u9762\u79ef\u6bd4\u3002
- \u56fe\u6848\u3001Logo \u548c\u540d\u724c\uff1a\u53ea\u63cf\u8ff0\u53ef\u89c1\u4f4d\u7f6e\u3001\u65b9\u5411\u3001\u5927\u5c0f\u5173\u7cfb\u548c\u89c6\u89c9\u653e\u7f6e\u3002
- \u7ed3\u6784\u90e8\u4ef6\uff1a\u628a\u624b\u3001\u65cb\u94ae\u3001\u76d6\u5b50\u3001\u63a5\u53e3\u3001\u62c9\u94fe\u3001\u540a\u724c\u3001\u5e95\u5ea7\u3001\u88c5\u9970\u4e94\u91d1\u7b49\u5173\u952e\u90e8\u4ef6\u7684\u4f4d\u7f6e\u5173\u7cfb\u3002
- \u88c5\u9970\u5143\u7d20\uff1a\u857e\u4e1d\u3001\u8d34\u5e03\u3001\u56fe\u6848\u3001\u56fe\u5f62\u3001\u914d\u9970\u548c\u5c40\u90e8\u7ec6\u8282\u7684\u76f8\u5bf9\u4f4d\u7f6e\u3002
- \u88c1\u5207\u4e0e\u6574\u4f53\u5173\u7cfb\uff1a\u8be6\u60c5\u9875\u53ea\u80fd\u653e\u5927\u539f\u4ea7\u54c1\u7684\u771f\u5b9e\u90e8\u5206\u3002
- \u7269\u7406\u5173\u7cfb\uff1a\u9884\u671f\u4ea7\u54c1\u5c3a\u5ea6\u3001\u652f\u6491\u9762\u3001\u63a5\u89e6\u70b9\u3001\u906e\u6321\u3001\u9634\u5f71\u65b9\u5411\u548c\u573a\u666f\u7269\u4f53\u5173\u7cfb\u3002

\u540c\u4e00\u5957\u8be6\u60c5\u9875\u5fc5\u987b\u590d\u7528\u76f8\u540c\u7684\u4ea7\u54c1\u4e00\u81f4\u6027\u951a\u70b9\u3002\u8fd9\u4e9b\u951a\u70b9\u4fdd\u62a4\u7684\u662f\u4ea7\u54c1\u8eab\u4efd\uff0c\u4e0d\u662f\u539f\u7167\u7684\u80cc\u666f\u3001\u76f8\u673a\u89d2\u5ea6\u3001\u88c1\u5207\u3001\u4ea7\u54c1\u653e\u7f6e\u3001\u706f\u5149\u8bbe\u7f6e\u6216\u767d\u5e95\u5355\u4ea7\u54c1\u6784\u56fe\u3002\u80cc\u666f\u3001\u6784\u56fe\u3001\u89d2\u5ea6\u3001\u88c1\u5207\u3001\u6a21\u7279\u5c55\u793a\u3001\u573a\u666f\u548c\u9875\u9762\u7ed3\u6784\u5e94\u6839\u636e\u9875\u9762\u89d2\u8272\u53d8\u5316\u3002

\u5982\u679c\u4e0a\u4f20\u7684\u4ea7\u54c1\u53c2\u8003\u662f\u767d\u5e95\u5355\u4ea7\u54c1\u56fe\uff0c\u6bcf\u4e2a\u751f\u6210\u63d0\u793a\u8bcd\u5fc5\u987b\u660e\u786e\u8bf4\u660e\uff1a\u4ec5\u4f7f\u7528\u53c2\u8003\u56fe\u9501\u5b9a\u4ea7\u54c1\u8eab\u4efd\uff0c\u4e0d\u8981\u5c06\u767d\u5e95\u4ea7\u54c1\u56fe\u590d\u5236\u4e3a\u767d\u5e95\u5355\u4ea7\u54c1\u56fe\uff0c\u8981\u521b\u5efa\u5e26\u6709\u4e70\u5bb6\u6587\u6848\u548c\u89c6\u89c9\u8bc1\u660e\u7684\u8bbe\u8ba1\u611f\u7535\u5546\u8be6\u60c5\u9875\u6784\u56fe\u3002

## Nodeter \u6267\u884c\u9002\u914d

- \u6240\u6709\u56fe\u7247\u901a\u8fc7 Nodeter \u540e\u53f0\u914d\u7f6e\u7684\u56fe\u7247\u6a21\u578b\u751f\u6210\u3002\u89c4\u5212\u5668\u4e3a\u6bcf\u5f20\u56fe\u7247\u521b\u5efa\u72ec\u7acb\u4efb\u52a1\uff0c\u6267\u884c\u5668\u8c03\u7528\u6a21\u578b\u3002
- \u7ed3\u679c\u901a\u8fc7 Nodeter \u7ed3\u679c\u5361\u7247\u4ea4\u4ed8\uff0c\u4e0d\u662f\u672c\u5730\u6587\u4ef6\u6216 ZIP \u5305\u3002
- \u4e00\u5f20\u8be6\u60c5\u9875\u56fe\u7247\u5bf9\u5e94\u4e00\u4e2a\u72ec\u7acb\u63d0\u793a\u8bcd\u548c\u4e00\u6b21\u72ec\u7acb\u7684\u56fe\u7247\u751f\u6210\u8c03\u7528\u3002\u4e0d\u8981\u5728\u4e00\u4e2a\u8bf7\u6c42\u4e2d\u751f\u6210\u591a\u5c4f\u62fc\u8d34\u3002
- \u5f53\u63d0\u4f9b\u4ea7\u54c1\u56fe\u7247\u4f5c\u4e3a\u53c2\u8003\u65f6\uff0c\u4f18\u5148\u4f7f\u7528\u539f\u56fe\u4f5c\u4e3a\u4ea7\u54c1\u8eab\u4efd\u53c2\u8003\u8f93\u5165\u3002\u53c2\u8003\u56fe\u53ea\u9501\u5b9a\u4ea7\u54c1\u8eab\u4efd\uff0c\u4e0d\u9501\u5b9a\u80cc\u666f\u3001\u6784\u56fe\u6216\u7167\u7247\u5e03\u5c40\u3002
- \u4e0d\u8981\u4f7f\u7528\u672c\u5730\u811a\u672c\u62fc\u63a5\u3001\u672c\u5730\u5e03\u5c40\u88c5\u914d\u3001\u672c\u5730\u6587\u6848\u53e0\u52a0\u3001\u672c\u5730\u80cc\u666f\u66ff\u6362\u6216\u672c\u5730\u88c1\u5207\u91cd\u7ec4\u6765\u521b\u5efa\u6700\u7ec8\u4ea4\u4ed8\u56fe\u7247\u3002
- \u5982\u679c\u9700\u8981\u62fc\u8d34\u98ce\u683c\u7684\u9875\u9762\uff0c\u5b8c\u6574\u7684\u62fc\u8d34\u98ce\u683c\u6a21\u5757\u5fc5\u987b\u901a\u8fc7\u56fe\u7247\u751f\u6210 API \u5728\u4e00\u6b21\u8c03\u7528\u4e2d\u76f4\u63a5\u751f\u6210\u3002`,
    references: ECOMMERCE_FULL_SERVICE_REFERENCES,
} as const;
