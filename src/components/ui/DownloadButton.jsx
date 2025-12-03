import Button from "@/components/ui/Button";

const DownloadButton = ({
  documentUrl,
  buttonText = "Download CV", // what the browser will show
  downloadFileName = "Mosfiqur_Rahman_CV.pdf", // actual hidden file name
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = documentUrl;
    link.download = downloadFileName; // ✅ real file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      variant="primary"
      rounded="full"
      outline
      className="font-medium"
      text={buttonText} // what user sees
    />
  );
};

export default DownloadButton;
