// Update the form submission URL in the handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    const formElement = e.target as HTMLFormElement;
    const formDataObj = new FormData(formElement);

    await fetch('https://crm.freescout-installation.com/modules/Webforms/capture.php', {
      method: 'POST',
      body: formDataObj,
      mode: 'no-cors'
    });

    const selectedPackage = packages.find(pkg => pkg.value === formData.package);
    if (selectedPackage) {
      setSelectedPrice(selectedPackage.price);
      setShowPayPal(true);
    } else {
      throw new Error('Please select a package');
    }
  } catch (error) {
    setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    setShowPayPal(false);
  } finally {
    setLoading(false);
  }
};
