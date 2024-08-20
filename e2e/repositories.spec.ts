import { test, expect } from '@playwright/test';
import { Type } from 'dealfront-assignment/types/filters';
import { repositoriesUrl } from './url';

test('renders table with at least one item', async ({ page }) => {
  await page.goto(repositoriesUrl());

  await expect(page.locator('table')).toBeVisible();
  await expect(page.locator('table tbody tr').first()).toBeVisible();
});

test('filters repositories by visibility', async ({ page }) => {
  await page.goto(repositoriesUrl());

  await page.locator('select').selectOption({ label: 'Private' });

  await page.waitForURL(repositoriesUrl(Type.PRIVATE));

  await expect(page.locator('table tbody tr td').nth(2)).toHaveText('Private');

  await page.locator('select').selectOption({ label: 'Public' });
  await page.waitForURL(repositoriesUrl(Type.PUBLIC));

  await expect(page.locator('table tbody tr td').nth(2)).toHaveText('Public');
});

test('renders repository details', async ({ page }) => {
  await page.goto(repositoriesUrl());

  const repoName = await page
    .locator('table tbody tr td a')
    .first()
    .textContent();

  await page.locator('table tbody tr td a').first().click();
  await expect(page.locator('h2')).toHaveText(`Repository: ${repoName}`);
  await expect(page.locator('ul li').first()).toBeVisible();
});
