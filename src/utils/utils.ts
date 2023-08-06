import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), 
};

export const common_headers = [""];

export function getId(row: any){
  return row.id;
}

export function getQuantite(row: any){
  return row.quantite;
}

export function getProduit(row: any){
  return row.produit?.nom;
}


export function getPrixDepart(row: any){
  return row.prixDepart;
}

export function getMarque(row: any){
  return row.marque?.nom;
}

export function getCategorie(row: any){
  return row.categorie?.nom;
}

export function getNom(row: any){
  return row.nom;
}

export function getPrenom(row: any){
  return row.prenom;
}

export function getTelephone(row: any){
  return row.telephone;
}

export function getEmail(row: any){
  return row.email;
}

export function getAdresse(row: any){
  return row.adresse;
}

export function getMagasin(row: any){
  return row.magasin?.nom;
}

export function getManager(row: any){
  return row.manager?.nom;
}

export function getNumero(row: any){
  return row.numero;
}

export function getDateCommande(row: any){
  return row.dateCommande;
}

export function getDateLivraison(row: any){
  return row.dateLivraison;
}

export function getClient(row: any){
  return row.clientId?.prenom + " " + row.clientId?.nom;
}

export function getVendeur(row: any){
  return row.vendeurId?.prenom + " " + row.vendeurId?.nom;
}

export function getRemise(row: any){
  return row.remise;
}

export function getMagasinBis(row: any){
  return row.magasinId?.nom;
}