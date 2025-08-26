import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import YouTubeModal from '@/components/YouTubeModal';

// Mock react-icons
vi.mock('react-icons/fa', () => ({
  FaTimes: () => <span data-testid="close-icon">×</span>
}));

describe('YouTubeModal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    videoId: 'test-video-id',
    title: 'Test Video Title'
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders when open', () => {
    render(<YouTubeModal {...defaultProps} />);
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Video Title')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<YouTubeModal {...defaultProps} isOpen={false} />);
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<YouTubeModal {...defaultProps} onClose={onClose} />);
    
    const closeButton = screen.getByLabelText('Cerrar modal de video');
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when escape key is pressed', () => {
    const onClose = vi.fn();
    render(<YouTubeModal {...defaultProps} onClose={onClose} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = vi.fn();
    render(<YouTubeModal {...defaultProps} onClose={onClose} />);
    
    const overlay = screen.getByRole('dialog').parentElement;
    fireEvent.click(overlay!);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders iframe with correct video ID', () => {
    render(<YouTubeModal {...defaultProps} />);
    
    const iframe = screen.getByTitle('Video: Test Video Title');
    expect(iframe).toHaveAttribute('src', expect.stringContaining('test-video-id'));
  });

  it('has proper accessibility attributes', () => {
    render(<YouTubeModal {...defaultProps} />);
    
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'youtube-modal-title');
    expect(dialog).toHaveAttribute('tabIndex', '-1');
  });

  it('prevents body scroll when open', () => {
    const originalOverflow = document.body.style.overflow;
    
    render(<YouTubeModal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
    
    // Cleanup
    document.body.style.overflow = originalOverflow;
  });
});
