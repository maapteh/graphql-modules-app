const PercyScript = require('@percy/script');

const sizes = [420, 768, 1200];
const baseUrl = 'http://localhost:4001';

PercyScript.run(async (page, percySnapshot) => {
    /**
     * Home
     */
    await page.goto(baseUrl);

    await page.waitFor(
        () => !!document.querySelector('[data-testid="product-details"]'),
    );
    await percySnapshot('Home', {
        widths: sizes,
    });

    /**
     * Product detail pagina
     */
    await page.goto(`${baseUrl}/product/9200000113065845`);

    await page.waitFor(
        () => !!document.querySelector('[data-testid="product-details"]'),
    );
    await percySnapshot('Product detail', {
        widths: sizes,
    });
});
