export class CreateDemolitionDto {
    "idcanale": string;
    "altroCanale": number;
    "nomeUser": string;
    "cognomeUser": string;
    "taxCode": string;
    "email": string;
    "freeCar":{
       "targa": string,
       "marca": string,
       "automodello": string,
       "autoalimentazione":{
          "id": number
       },
       "numeroporte": number;
       "km": number,
       "anno": number,
       "note": string,
       "vaInMoto": boolean,
       "blocked": boolean
    };
    "cellulare": string;
    "altroRecapito": string;
    "nomeDelegato": string;
    "cognomeDelegato": string;
    "recapitoDelegato": string;
    "note": string;
    "privacy": boolean;
    "privacyMarketing": boolean;
    "luogoRitiro":{
       "comune":{
          "id": number,
          "nome": string,
          "lat": number,
          "lng": number,
          "caps": number,
          "provincia":{
             "id": number,
             "nome": string,
             "sigla": string,
             "lat": number,
             "lon": number,
             "regione":{
                "id": number,
                "nome": string,
                "nazione":{
                   "id": number,
                   "nome": string,
                   "sigla": string
                }
             }
          },
          "name": string
       },
       "cap":{
          "id": number,
          "cap": string,
          "name": string
       },
       "civico": string,
       "indirizzo": string
    };
    "indirizzoUser":{
       "comune":{
          "id":number,
          "nome": string,
          "lat": number,
          "lng": number,
          "caps": string,
          "provincia":{
             "id": number,
             "nome": string,
             "sigla": string,
             "lat": number,
             "lon": number,
             "regione":{
                "id": number,
                "nome": string,
                "nazione":{
                   "id": number,
                   "nome": string,
                   "sigla": string
                }
             }
          },
          "name": string
       },
       "cap":{
          "id": number,
          "cap":string,
          "name":string
       },
       "civico": string,
       "indirizzo": string
    };
    "referrer":{
       "id":number
    };
    "source": string;
    "files":[
       
    ];
    "region": number;
    "province": number;
    "city": number;
    "zipCode": number;
    "address": string;
    "civico": string;
 }
