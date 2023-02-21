import firebase from 'firebase/compat/app'

export default interface IClip {
    docID?: string;
    uid: string,
    title: string,
    url: string,
    displayName: string,
    fileName: string,
    timestamp: firebase.firestore.FieldValue,
    screenshotURL: string,
    screenshotFileName: string
}