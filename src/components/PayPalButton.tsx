import { useEffect, useCallback } from 'react';

interface PayPalButtonProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function PayPalButton({ amount, onSuccess, onError }: PayPalButtonProps) {
  const initializePayPalButton = useCallback(async () => {
    try {
      if (!window.paypal) {
        throw new Error('PayPal SDK not loaded');
      }

      // Clear any existing buttons
      const container = document.getElementById('paypal-button-container');
      if (container) {
        container.innerHTML = '';
      }

      await window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'pay'
        },
        createOrder: (_: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount.toString(),
                currency_code: 'USD'
              },
              payee: {
                email_address: 'contact@freescout-installation.com'
              },
              description: 'FreeScout Installation Service'
            }],
            application_context: {
              shipping_preference: 'NO_SHIPPING'
            }
          });
        },
        onApprove: async (_: any, actions: any) => {
          try {
            const order = await actions.order.capture();
            if (order.status === 'COMPLETED') {
              onSuccess();
            } else {
              throw new Error('Payment not completed');
            }
          } catch (error) {
            onError(error instanceof Error ? error : new Error('Payment failed'));
          }
        },
        onError: (err: Error) => {
          onError(err);
        },
        onCancel: () => {
          onError(new Error('Payment cancelled'));
        }
      }).render('#paypal-button-container');
    } catch (error) {
      onError(error instanceof Error ? error : new Error('Failed to initialize PayPal'));
    }
  }, [amount, onSuccess, onError]);

  useEffect(() => {
    initializePayPalButton();
  }, [initializePayPalButton]);

  return (
    <div className="space-y-4">
      <div id="paypal-button-container" className="min-h-[150px]" />
      <p className="text-sm text-gray-600 text-center">
        Secure payment processed by PayPal
      </p>
    </div>
  );
}