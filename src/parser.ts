import * as util from 'util';
import * as fs from 'fs';
import * as convert from 'xml-js';
import * as VehicleModel from './vehicleModel';
import * as ResourceModel from './resourceModel';

const sourceFileFolderVehicles:string = "./src/raw/Vehicles/";
const sourceFileFolderShops:string = "./raw/ShopInventories/";

function readDirectory (_sourceFileFolder:string): VehicleModel.VehicleObject[] {
  // Array to fill with data from XML files
  const collectedData:VehicleModel.VehicleObject[] = [];

  fs.readdir(_sourceFileFolder, function(err, files) {
    // Handling error
    if (err) {
      return console.log('Unable to scan directory: '+ err);
    }    

    // Read all files in directory
    files.forEach(function (file) {
      console.log('Reading file: ' + file);

      let XMLData = readFile(_sourceFileFolder.concat(file));
      let convertedXML = convertXMLTojs(XMLData);
      collectedData.push(convertedXML);
      // console.log(util.inspect(collectedData, false, 7, true));
    })
    console.log(util.inspect(collectedData, false, 5, true));
  });
  return collectedData;
}

function readFile (_sourceFileLocation:string) {
  let xml = fs.readFileSync(_sourceFileLocation, 'utf8');
  return xml;
}

function convertXMLTojs (_xmlFile:any) {
  let options = {
    ignoreComment: true, 
    alwaysChildren: true,
    compact: true
  };
  let result:any = convert.xml2js(_xmlFile, options);
  return result;
}

function filterVehicles (_dataObject:VehicleModel.VehicleObject[]) {
  let filteredData = _dataObject;
  filteredData.forEach(function (vehicleObject) {
    console.log(vehicleObject);
  })

  return filteredData
}

async function parseStarCitizen () {
  // let parsedData:ResourceModel.Resource;

  // parse all data (vehicles / shop inventories)
  let vehicleData:VehicleModel.VehicleObject[] = readDirectory(sourceFileFolderVehicles);
  // let shopData = await readDirectory(sourceFileFolderShops);

  // Filter the data to only leave the usefull data
  vehicleData = filterVehicles(vehicleData);
  // shopData = filterShops(shopData);

  // Add filtered data to parsed data array
  // parsedData.vehicles = vehicleData;
  // parsedData.shops = shopData
  // return parsedData;

  // console.log(util.inspect(vehicleData, false, 3, true));
}


parseStarCitizen()
  .then(collectedData => {
    // console.log(util.inspect(collectedData, false, 2, true));
  })
  .catch(err => {
    console.error(err);
  }
);