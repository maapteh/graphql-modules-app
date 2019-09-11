const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
    await page.goto('http://localhost:4001');

    await page.waitFor(
        () => !!document.querySelector('[data-testid="product-details"]'),
    );
    await percySnapshot('Home', {
        widths: [420, 768, 1200],
    });
});
