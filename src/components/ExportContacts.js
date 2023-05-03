import fileDownload from 'js-file-download';

const ExportContacts = (contacts) => {

    const handleDownload = () => {
        fileDownload(JSON.stringify(contacts), "contacts.JSON");
    }

    return (
      <div>
        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue" onClick={() => handleDownload()}>Export to JSON</button>
      </div>
    );
}

export default ExportContacts;