import Button from "@/components/ui/Button";

const DownloadButton = ({ documentUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = documentUrl;
    link.download = fileName; // Specifies the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the temporary link
  };

  return (
    <Button
      onClick={handleDownload}
      variant="primary"
      rounded="full"
      outline
      className="font-medium"
      text={`Download ${fileName}`}
    />
  );
};

export default DownloadButton;
