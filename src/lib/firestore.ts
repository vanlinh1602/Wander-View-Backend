import type { DocumentData, SetOptions, WhereFilterOp } from '@google-cloud/firestore';

export const getDocData = async (collection: string, doc: string): Promise<any> => {
  if (Firebase) {
    const data = await Firebase.firestore().collection(collection).doc(doc).get();
    if (data.exists) {
      return data.data();
    }
    return null;
  }
  return null;
};

export const queryData = async (
  collection: string,
  condition: { field: string; op: WhereFilterOp; value: string }[]
): Promise<any> => {
  if (Firebase && condition.length) {
    let ref: any = await Firebase.firestore().collection(collection);
    condition.forEach(({ field, op, value }) => {
      ref = ref.where(field, op, value);
    });
    if (ref) {
      const result: CustomObject<any> = {};
      const snapshot = await ref.get();
      snapshot.forEach((doc: any) => {
        result[doc.id] = doc.data();
      });

      return result;
    }

    return {};
  }
  return {};
};

export const createDocData = async (
  data: any,
  collection: string,
  doc?: string,
  option?: SetOptions
): Promise<DocumentData | any> => {
  if (Firebase) {
    if (doc) {
      const refData = await Firebase.firestore()
        .collection(collection)
        .doc(doc)
        .set(data, option ?? {});
      return refData;
    }
    const refData = await Firebase.firestore().collection(collection).add(data);
    return refData;
  }
  return null;
};

export const updateDocData = async (
  collection: string,
  doc: string,
  data: any,
  option?: SetOptions
): Promise<any> => {
  if (Firebase) {
    if (option && Object.entries(option).length) {
      const updated = Firebase.firestore().collection(collection).doc(doc).set(data, option);
      return updated;
    }
    const updated = await Firebase.firestore().collection(collection).doc(doc).update(data);
    return updated;
  }
  return null;
};

export const removeDocData = async (collection: string, doc: string): Promise<any> => {
  if (Firebase) {
    const removed = await Firebase.firestore().collection(collection).doc(doc).delete();
    return removed;
  }
  return null;
};
