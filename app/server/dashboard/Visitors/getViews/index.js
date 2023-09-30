import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import { differenceInDays, startOfMonth, subMonths } from 'date-fns'; // Import date-fns for date calculations

const jsonwebtoken = require('jsonwebtoken');

export async function getViews() {
  try {
    const db = getFirestore();
    const email = localStorage.getItem("email");

    const collectionRef = collection(db, 'users', email, 'visitors');

    // Today
    const today = new Date();
    const todayQuery = query(collectionRef, where('timestamp', '>=', today));
    const documents1 = await getDocs(todayQuery);
    const todayVisitors = documents1.docs.map((documentSnapshot) => documentSnapshot.data());

    // Yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayQuery = query(collectionRef, where('timestamp', '>=', yesterday, '&&', 'timestamp', '<', today));
    const documents2 = await getDocs(yesterdayQuery);
    const yesterdayVisitors = documents2.docs.map((documentSnapshot) => documentSnapshot.data());

    // One week ago
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const oneWeekAgoQuery = query(collectionRef, where('timestamp', '<=', oneWeekAgo));
    const documents3 = await getDocs(oneWeekAgoQuery);
    const oneWeekAgoVisitors = documents3.docs.map((documentSnapshot) => documentSnapshot.data());

    // This month
    const thisMonth = startOfMonth(new Date());
    const thisMonthQuery = query(collectionRef, where('timestamp', '>=', thisMonth));
    const documents4 = await getDocs(thisMonthQuery);
    const thisMonthVisitors = documents4.docs.map((documentSnapshot) => documentSnapshot.data());

    // Last month
    const lastMonth = subMonths(startOfMonth(new Date()), 1);
    const lastMonthQuery = query(collectionRef, where('timestamp', '>=', lastMonth));
    const documents5 = await getDocs(lastMonthQuery);
    const lastMonthVisitors = documents5.docs.map((documentSnapshot) => documentSnapshot.data());

    return {
      todayVisitors,
      yesterdayVisitors,
      oneWeekAgoVisitors,
      thisMonthVisitors,
      lastMonthVisitors,
    };
  } catch (e) {
    console.error('Error:', e);
    return {
      todayVisitors: [],
      yesterdayVisitors: [],
      oneWeekAgoVisitors: [],
      thisMonthVisitors: [],
      lastMonthVisitors: [],
    };
  }
}
