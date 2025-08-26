import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contacto');
  });

  test('should display contact form elements', async ({ page }) => {
    // Check main heading
    await expect(page.getByRole('heading', { name: 'Contacto', exact: true })).toBeVisible();
    
    // Check form fields exist
    await expect(page.getByLabel('Nombre *')).toBeVisible();
    await expect(page.getByLabel('Email *')).toBeVisible();
    await expect(page.getByLabel('Teléfono')).toBeVisible();
    await expect(page.getByLabel('Empresa')).toBeVisible();
    await expect(page.getByLabel('Asunto *')).toBeVisible();
    await expect(page.getByLabel('Mensaje *')).toBeVisible();
    
    // Check submit button
    await expect(page.getByRole('button', { name: 'Enviar mensaje' })).toBeVisible();
  });

  test('should show form validation', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    
    // Should show validation errors
    await expect(page.locator('text=introduce tu nombre')).toBeVisible();
    await expect(page.locator('text=introduce un email válido')).toBeVisible();
    await expect(page.locator('text=introduce tu mensaje')).toBeVisible();
  });

  test('should accept form input', async ({ page }) => {
    // Fill out form fields
    await page.getByLabel('Nombre *').fill('Test User');
    await page.getByLabel('Email *').fill('test@example.com');
    await page.getByLabel('Teléfono').fill('123456789');
    await page.getByLabel('Empresa').fill('Test Company');
    await page.getByLabel('Asunto *').selectOption('informacion');
    await page.getByLabel('Mensaje *').fill('This is a test message');
    
    // Check that fields have values
    await expect(page.getByLabel('Nombre *')).toHaveValue('Test User');
    await expect(page.getByLabel('Email *')).toHaveValue('test@example.com');
    await expect(page.getByLabel('Teléfono')).toHaveValue('123456789');
    await expect(page.getByLabel('Empresa')).toHaveValue('Test Company');
    await expect(page.getByLabel('Mensaje *')).toHaveValue('This is a test message');
  });
});

test.describe('Navigation', () => {
  test('should navigate to main pages', async ({ page }) => {
    // Test navigation to main pages by URL
    await page.goto('/empresa');
    await expect(page).toHaveURL('/empresa');
    
    await page.goto('/instalaciones');
    await expect(page).toHaveURL('/instalaciones');
    
    await page.goto('/maquinarias');
    await expect(page).toHaveURL('/maquinarias');
    
    await page.goto('/residuos');
    await expect(page).toHaveURL('/residuos');
    
    await page.goto('/contacto');
    await expect(page).toHaveURL('/contacto');
  });
});
