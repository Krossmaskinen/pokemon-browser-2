import { expect, test, type Page } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Pokémons' })).toBeVisible();
});

test('list view displays 10 pokemons with names and images', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('heading', { name: 'Pokémons' }).waitFor();

	const pokemons = await page.getByRole('listitem').all();

	expect(pokemons).toHaveLength(10);

	const firstItemTextContent = await pokemons[0].textContent();
	const firstItemImage = await pokemons[0].getByAltText('bulbasaur');

	expect(firstItemTextContent).toContain('bulbasaur');
	expect(firstItemImage).toBeDefined();
});

test('should be able to navigate using back and forward buttons', async ({ page }) => {
	await page.goto('/');
	const pokemons = await page.getByRole('listitem').all();
	const firstItemTextContent = await pokemons[0].textContent();

	expect(firstItemTextContent).toContain('#1 - ');
	expect(firstItemTextContent).not.toContain('#11 - ');

	await testNextButton(page);
	await testPrevButton(page);
});

async function testNextButton(page: Page) {
	const nextButton = await page.getByText('Next');
	await nextButton.click();
	await page.waitForURL('**/1');

	const pokemons = await page.getByRole('listitem').all();
	const firstItemTextContent = await pokemons[0].textContent();

	expect(firstItemTextContent).toContain('#11 - ');
	expect(firstItemTextContent).not.toContain('#1 - ');
}

async function testPrevButton(page: Page) {
	const prevButton = await page.getByText('Prev');
	await prevButton.click();
	await page.waitForURL('**/0');

	const pokemons = await page.getByRole('listitem').all();
	const firstItemTextContent = await pokemons[0].textContent();

	expect(firstItemTextContent).toContain('#1 - ');
	expect(firstItemTextContent).not.toContain('#11 - ');
}
