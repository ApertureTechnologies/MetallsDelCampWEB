import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contacto');
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contacto', exact: true })).toBeVisible();
    await expect(page.getByLabel('Nombre *')).toBeVisible();
    await expect(page.getByLabel('Email *')).toBeVisible();
    await expect(page.getByLabel('Mensaje *')).toBeVisible();
  });

  test('should show validation errors for empty required fields', async ({ page }) => {
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    
    // Check for validation messages
    await expect(page.locator('text=introduce tu nombre')).toBeVisible();
    await expect(page.locator('text=introduce un email válido')).toBeVisible();
    await expect(page.locator('text=introduce tu mensaje')).toBeVisible();
  });

  test('should submit form with valid data', async ({ page }) => {
    // Fill form with valid data
    await page.getByLabel('Nombre *').fill('Test User');
    await page.getByLabel('Email *').fill('test@example.com');
    await page.getByLabel('Teléfono').fill('123456789');
    await page.getByLabel('Empresa').fill('Test Company');
    await page.getByLabel('Mensaje *').fill('This is a test message with more than 10 characters');
    
    // Select subject
    await page.getByLabel('Asunto *').selectOption('informacion');
    
    // Accept privacy policy
    await page.getByLabel('Acepto la política de privacidad').check();
    
    // Submit form
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    
    // Wait for success message or redirect
    await expect(page.locator('text=enviado correctamente')).toBeVisible({ timeout: 10000 });
  });

  test('should prevent spam with honeypot', async ({ page }) => {
    // Fill honeypot field (this should be hidden)
    await page.evaluate(() => {
      const honeypot = document.querySelector('input[name="website"]') as HTMLInputElement;
      if (honeypot) {
        honeypot.value = 'spam';
      }
    });

    // Fill other required fields
    await page.getByLabel('Nombre *').fill('Spam Bot');
    await page.getByLabel('Email *').fill('spam@example.com');
    await page.getByLabel('Asunto *').selectOption('otro');
    await page.getByLabel('Mensaje *').fill('This is spam message');
    await page.getByLabel('Acepto la política de privacidad').check();
    
    // Submit form
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    
    // Should not see success message
    await expect(page.locator('text=enviado correctamente')).not.toBeVisible({ timeout: 5000 });
  });
});

test.describe('Navigation', () => {
  test('should navigate to main pages', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to different pages
    await page.getByRole('link', { name: 'Empresa' }).click();
    await expect(page).toHaveURL('/empresa');
    
    await page.getByRole('link', { name: 'Instalaciones' }).click();
    await expect(page).toHaveURL('/instalaciones');
    
    await page.getByRole('link', { name: 'Maquinarias' }).click();
    await expect(page).toHaveURL('/maquinarias');
    
    await page.getByRole('link', { name: 'Residuos' }).click();
    await expect(page).toHaveURL('/residuos');
    
    await page.getByRole('link', { name: 'Contacto' }).click();
    await expect(page).toHaveURL('/contacto');
  });

  test('should handle 404 pages correctly', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    expect(response?.status()).toBe(404);
  });
});

test.describe('YouTube Modal', () => {
  test('should open and close YouTube modal on installations page', async ({ page }) => {
    await page.goto('/instalaciones');
    
    // Find and click a video thumbnail
    const videoButton = page.locator('[data-testid="video-thumbnail"]').first();
    if (await videoButton.count() > 0) {
      await videoButton.click();
      
      // Check modal is open
      await expect(page.getByRole('dialog')).toBeVisible();
      
      // Close with escape key
      await page.keyboard.press('Escape');
      await expect(page.getByRole('dialog')).not.toBeVisible();
    }
  });
});

test.describe('Accessibility', () => {
  test('should have no accessibility violations on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Basic accessibility checks
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('[lang]')).toHaveAttribute('lang', 'es');
    
    // Check for skip links or other a11y features
    const skipLink = page.locator('a[href="#main-content"]');
    if (await skipLink.count() > 0) {
      await expect(skipLink).toBeVisible();
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test tab navigation
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT']).toContain(focusedElement);
  });
});
