import { IWrecker } from "./wrecker.service"



export const WRECKERS_LIST = (): IWrecker[] => {
    /* let wreckers =  "bru.ma,cda-FEZZA ,cta demolitore ,cubeda ,de feudis canosa,destro demolizioni ,spada demolizioni ,belvedere demolizioni,benassi ,brescello demolizioni ,ecocar ,modulor ,ecosillar ,ecosistem SRL,endocar ,eurorottami SRL,ecologia 2000,economicar SRL,al ponte,pak varese  ,di bella milano ,aquila demolizioni ,agusta ricambi ,autodaz ricambi ,rovigo demolizioni ,trenta ricambi,veneta ecorecuperi ,viglia group ,vizzi autodemolizioni ,kas SRL,manicone ,paglierani ,sannio service ,buffoli ,callalta ,chimera enna ,parisi ,pastori commerciali ,pollini ,pomili ,nervesa,nicolini ,nobile autodemolizione ,nuova fermeco,ferretti ,flacco ,fratelli contarese ,galie' marie pia SNC,garofalo ,gianni sismondi ,global car ,gobbi venezia ,gori centro demolizioni,grieco latina ,grillofe ,gs car demo ,il ragno ,la fenice ,lauria ,mauto ,motortecno ,MPM ,nardino luigi ,levriero ,luca F.lli ,luca summa demo al ,marziani ,serenissima ,tavolacci ,tecnoautodemolizioni ,toniatti ,RCBautodemolizione ,saccheggiani,salaria car marche ,savino autodemolizione";
    let emails = "brumasrlfossano@gmail.com ,fezzaml74@gmail.com ,ctademolizione@inwind.it,ufficio@cubeda.com,dodefeudis@gmail.com,info@nuovademolizionidestro.com,autodemolizioni.spada@gmail.com ,info@demolizionibelvedere.com ,benno28@gmail.com,brescellodemolizioni@libero.com,ecocar.cavagnoli@gmail.com ,segreteria@autodemolizioni.com,ecosillar@gmail.com ,ceribone@ecosistem-srl.it,endocarto@tiscali.it ,eurorottami@gmail.com ,pistoialuigi@libero.it,info@economycars.it,info@autodemolizionealponte.it,numan94@libero.it,dibellademolizione@hotmail.com,aquila-demolizioni@gmail.com,augustaautodemolizioni@gmail.com,autoricambi87@gmail.com,autodemolizionicars@libero.it,trentaricambi@gmail.com ,amministrazione@venetaecorecuperi.it,autodemolizioniroma@libero.it,info@autodemolizionivizzi.com ,autodemolizionikas@gmail.com,alvin2bello@gmail.com,demolizionepaglierani@email.it,autodemolizionisannioservice@gmail.com,infoautodemolizionib@gmail.com,amministrazione@autodemo.net,amministrazione@autodemolizionichimera.it,maripar@live.it,info@pollinisrl.it,info@pollinisrl.it,luca.pom.ds@gmail.com ,info@nerveseautorecupero.it,info@nicolinisrl.eu,nobiledemolizioni@libero.it,info@nuovafemeco.it,info@ferrettidemolizioni.it,autodemolizioniflacco@gmail.com,amministrazione@fratellicontarese.com,autodemolizionigalie@gmail.com,vincenzogarofalo1960@hotmail.it,gianni_GISMONDI@VIRGILIO.IT,amministrazioni@globalcarimola.it,gobbisnc@inwind.it,goridemolizioni@gmail.com,info@autodemolizionigrieco.com,grillofer.patrizia@grillofersnc.com,gscar.fe@libero.it,il.ragno@libero.it,demolizioni@lafenicesas.eu,lauriaassistanc@live.it,emmeauto2012@libero.it,rottama@motortecno.it,mpmautodsas@gmail.com,nardinoluigi@libero.it,illevrierosrl@libero.it,lucademolizioni@gmail.com,autodemolizionisumma@gmail.com,ufficio@autodemolizionemarziani.it,info@serenissima.pn.it,info@femlizionineiveicoli.com,tecnoauto.capece@gmail.com,amministrazioni@toniattiautodemolizioni.com,rcb.autodemolizione@gmail.com,info@saccheggiani.com,salariacar@gmail.com,autodmoolizionesavino@hotmail.com";

    let wreckerArray = wreckers.split(",");
    let mailsArray = emails.split(",");

    let contactArray: IWrecker[] = [];

    wreckerArray.forEach((wrecker, index) => {
        contactArray.push({
            socialReason: wrecker,
            email: mailsArray[index]
        })
    }); */


    return [
        {socialReason: 'TEST DA NON USARE', email: 'simone.ventura@consultant.com'},
        { socialReason: 'bru.ma', email: 'brumasrlfossano@gmail.com ' },
        { socialReason: 'cda-FEZZA ', email: 'fezzaml74@gmail.com ' },
        {
          socialReason: 'cta demolitore ',
          email: 'ctademolizione@inwind.it'
        },
        { socialReason: 'cubeda ', email: 'ufficio@cubeda.com' },
        { socialReason: 'de feudis canosa', email: 'dodefeudis@gmail.com' },
        {
          socialReason: 'destro demolizioni ',
          email: 'info@nuovademolizionidestro.com'
        },
        {
          socialReason: 'spada demolizioni ',
          email: 'autodemolizioni.spada@gmail.com '
        },
        {
          socialReason: 'belvedere demolizioni',
          email: 'info@demolizionibelvedere.com '
        },
        { socialReason: 'benassi ', email: 'benno28@gmail.com' },
        {
          socialReason: 'brescello demolizioni ',
          email: 'brescellodemolizioni@libero.com'
        },
        { socialReason: 'ecocar ', email: 'ecocar.cavagnoli@gmail.com ' },
        { socialReason: 'modulor ', email: 'segreteria@autodemolizioni.com' },
        { socialReason: 'ecosillar ', email: 'ecosillar@gmail.com ' },
        { socialReason: 'ecosistem SRL', email: 'ceribone@ecosistem-srl.it' },
        { socialReason: 'endocar ', email: 'endocarto@tiscali.it ' },
        { socialReason: 'eurorottami SRL', email: 'eurorottami@gmail.com ' },
        { socialReason: 'ecologia 2000', email: 'pistoialuigi@libero.it' },
        { socialReason: 'economicar SRL', email: 'info@economycars.it' },
        { socialReason: 'al ponte', email: 'info@autodemolizionealponte.it' },
        { socialReason: 'pak varese  ', email: 'numan94@libero.it' },
        {
          socialReason: 'di bella milano ',
          email: 'dibellademolizione@hotmail.com'
        },
        {
          socialReason: 'aquila demolizioni ',
          email: 'aquila-demolizioni@gmail.com'
        },
        {
          socialReason: 'agusta ricambi ',
          email: 'augustaautodemolizioni@gmail.com'
        },
        {
          socialReason: 'autodaz ricambi ',
          email: 'autoricambi87@gmail.com'
        },
        {
          socialReason: 'rovigo demolizioni ',
          email: 'autodemolizionicars@libero.it'
        },
        { socialReason: 'trenta ricambi', email: 'trentaricambi@gmail.com ' },
        {
          socialReason: 'veneta ecorecuperi ',
          email: 'amministrazione@venetaecorecuperi.it'
        },
        {
          socialReason: 'viglia group ',
          email: 'autodemolizioniroma@libero.it'
        },
        {
          socialReason: 'vizzi autodemolizioni ',
          email: 'info@autodemolizionivizzi.com '
        },
        { socialReason: 'kas SRL', email: 'autodemolizionikas@gmail.com' },
        { socialReason: 'manicone ', email: 'alvin2bello@gmail.com' },
        {
          socialReason: 'paglierani ',
          email: 'demolizionepaglierani@email.it'
        },
        {
          socialReason: 'sannio service ',
          email: 'autodemolizionisannioservice@gmail.com'
        },
        { socialReason: 'buffoli ', email: 'infoautodemolizionib@gmail.com' },
        { socialReason: 'callalta ', email: 'amministrazione@autodemo.net' },
        {
          socialReason: 'chimera enna ',
          email: 'amministrazione@autodemolizionichimera.it'
        },
        { socialReason: 'parisi ', email: 'maripar@live.it' },
        { socialReason: 'pastori commerciali ', email: 'info@pollinisrl.it' },
        { socialReason: 'pollini ', email: 'info@pollinisrl.it' },
        { socialReason: 'pomili ', email: 'luca.pom.ds@gmail.com ' },
        { socialReason: 'nervesa', email: 'info@nerveseautorecupero.it' },
        { socialReason: 'nicolini ', email: 'info@nicolinisrl.eu' },
        {
          socialReason: 'nobile autodemolizione ',
          email: 'nobiledemolizioni@libero.it'
        },
        { socialReason: 'nuova fermeco', email: 'info@nuovafemeco.it' },
        { socialReason: 'ferretti ', email: 'info@ferrettidemolizioni.it' },
        { socialReason: 'flacco ', email: 'autodemolizioniflacco@gmail.com' },
        {
          socialReason: 'fratelli contarese ',
          email: 'amministrazione@fratellicontarese.com'
        },
        {
          socialReason: "galie' marie pia SNC",
          email: 'autodemolizionigalie@gmail.com'
        },
        {
          socialReason: 'garofalo ',
          email: 'vincenzogarofalo1960@hotmail.it'
        },
        {
          socialReason: 'gianni sismondi ',
          email: 'gianni_GISMONDI@VIRGILIO.IT'
        },
        {
          socialReason: 'global car ',
          email: 'amministrazioni@globalcarimola.it'
        },
        { socialReason: 'gobbi venezia ', email: 'gobbisnc@inwind.it' },
        {
          socialReason: 'gori centro demolizioni',
          email: 'goridemolizioni@gmail.com'
        },
        {
          socialReason: 'grieco latina ',
          email: 'info@autodemolizionigrieco.com'
        },
        {
          socialReason: 'grillofe ',
          email: 'grillofer.patrizia@grillofersnc.com'
        },
        { socialReason: 'gs car demo ', email: 'gscar.fe@libero.it' },
        { socialReason: 'il ragno ', email: 'il.ragno@libero.it' },
        { socialReason: 'la fenice ', email: 'demolizioni@lafenicesas.eu' },
        { socialReason: 'lauria ', email: 'lauriaassistanc@live.it' },
        { socialReason: 'mauto ', email: 'emmeauto2012@libero.it' },
        { socialReason: 'motortecno ', email: 'rottama@motortecno.it' },
        { socialReason: 'MPM ', email: 'mpmautodsas@gmail.com' },
        { socialReason: 'nardino luigi ', email: 'nardinoluigi@libero.it' },
        { socialReason: 'levriero ', email: 'illevrierosrl@libero.it' },
        { socialReason: 'luca F.lli ', email: 'lucademolizioni@gmail.com' },
        {
          socialReason: 'luca summa demo al ',
          email: 'autodemolizionisumma@gmail.com'
        },
        {
          socialReason: 'marziani ',
          email: 'ufficio@autodemolizionemarziani.it'
        },
        { socialReason: 'serenissima ', email: 'info@serenissima.pn.it' },
        {
          socialReason: 'tavolacci ',
          email: 'info@femlizionineiveicoli.com'
        },
        {
          socialReason: 'tecnoautodemolizioni ',
          email: 'tecnoauto.capece@gmail.com'
        },
        {
          socialReason: 'toniatti ',
          email: 'amministrazioni@toniattiautodemolizioni.com'
        },
        {
          socialReason: 'RCBautodemolizione ',
          email: 'rcb.autodemolizione@gmail.com'
        },
        { socialReason: 'saccheggiani', email: 'info@saccheggiani.com' },
        {
          socialReason: 'salaria car marche ',
          email: 'salariacar@gmail.com'
        },
        {
          socialReason: 'savino autodemolizione',
          email: 'autodmoolizionesavino@hotmail.com'
        }
      ];
}
