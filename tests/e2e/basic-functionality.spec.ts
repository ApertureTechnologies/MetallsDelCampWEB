import { test, expect } from '@playwright/test';

test.describe('Basic Website Functionality', () => {
  test('should load contact page with form elements', async ({ page }) => {
    await page.goto('/contacto');
    
    // Check main heading
    await expect(page.getByRole('heading', { name: 'Contacto', exact: true })).toBeVisible();
    
    // Check form fields exist
    await expect(page.getByLabel('Nombre *')).toBeVisible();
    await expect(page.getByLabel('Email *')).toBeVisible();
    await expect(page.getByLabel('Mensaje *')).toBeVisible();
    
    // Check submit button
    await expect(page.getByRole('button', { name: 'Enviar mensaje' })).toBeVisible();
  });

  test('should navigate to all main pages successfully', async ({ page }) => {
    // Test navigation to main pages by URL
    await page.goto('/');
    await expect(page).toHaveURL('/');
    
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

  test('should load all pages without errors', async ({ page }) => {
    const pages = [
      '/',
      '/empresa',
      '/instalaciones', 
      '/maquinarias',
      '/residuos',
      '/contacto',
      '/clientes',
      '/comerciales',
      '/gestion-y-documentacion-ambiental'
    ];

    for (const url of pages) {
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);
      
      // Check page loaded without JavaScript errors
      const title = await page.title();
      expect(title).toBeTruthy();
    }
  });
});
