let CommonMessageAsJson = require("./MessageAsJson/EntryFile");
let CommonMessageAsString = require("./MessageAsString/EntryFile");

let StartFunc = ({ inWss, inData, inIsBinary }) => {
    let LocalWss = inWss;
    let LocalData = inData;

    // LocalWss.clients.forEach(function each(client) {
    //     if (client !== ws && client.readyState === WebSocket.OPEN) {
    //         client.send(LocalData, { binary: isBinary });
    //     }
    // });

    try {
        LocalDataAsJson = JSON.parse(LocalData);
        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson });

        return;
    } catch (error) {

    };

    CommonMessageAsString({ inDataAsString: LocalData.toString() });
};

module.exports = StartFunc;