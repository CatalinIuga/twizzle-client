// const [session, setSession] = useState({});
// const [message, setMessage] = useState("");

// useEffect(() => {
//   fetch("https://localhost:7267/api/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({
//       email: "admin@email.com",
//       password: "12345",
//     }),
//   })
//     .then((res) => res.text())
//     .then((r) => {
//       setMessage(r);
//     })
//     .then(() =>
//       fetch("https://localhost:7267/api/auth/session", {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((r) => {
//           setSession(r);
//         })
//     );
// }, []);
