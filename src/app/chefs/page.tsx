// "use client";

// import React from "react";
// import styles from "./chefs.module.css";
// import NavBar from "@/components/navbar/NavBar";
// import Footer from "@/components/footer";
// import CardChefs from "@/components/cards/CardChefs";

// import chefsData from "@/components/jsons/chefs.json";

// function Chefs() {
//   return (
//     <>
//       <NavBar />
//       <main className={styles.mainChefs}>
//         <h2 className={styles.titlePage}>
//           Chef's profesionales y de confianza a un click!
//         </h2>
//         {chefsData.chefs.map((chef) => (
//           <div key={chef.id} className={styles.boxChef}>
//             <CardChefs
//               name={chef.name}
//               status={chef.achievements.status}
//               ranking={chef.achievements.ranking}
//               bio={chef.bio}
//             />
//           </div>
//         ))}
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Chefs;
