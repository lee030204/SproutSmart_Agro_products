// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {toast} from "sonner";

// function Copyright(props) {
//   return (
//     <div></div>
    
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();
// export default function SignInSide() {
//   const navigate = useNavigate();
//   const [emai, setEmail] = React.useState();
//   const [passwor, setPassword] = React.useState();
//   const [user, setUser] = React.useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     const usl = "http://localhost:8080/login";
//     axios.get(usl).then((response) => {
//       setUser(response.data);
//     });
    
//     const isMatch = user.some(
//       (use) => use.email == emai && use.password == passwor
//     );
//     if (isMatch) {
//       toast.success("Successful Login");
//       navigate("/");
//     } else {
//       toast.success("Invalid");
//       // alert("failed");
//     }
//   };

 

//   // const submit = async (e) =>{
//   //   e.preventDefault();

//   //   const usl = "http://localhost:3001/signUp";
//   // axios.get(usl).then((response) => {
//   //   setUser(response.data);
  
//   // const isMatch = user.some(
//   //     (use) => use.email == emai && use.password == passwor
//   //   );
//   //   if (isMatch) {
//   //       toast.success("Successful Login");
//   //       navigate("/");
//   //     }
//   //     })
//   //     .catch((err) => {
//   //       console.log(err.response)
        
//   //       if (err.response.status === 404) {
//   //         toast.error("Invalid Email");
//   //       } else if (err.response.status === 403) {
//   //         toast.error("Mismatch Password");
//   //       } else {
//   //         toast.error("Internal Server Error");
//   //       }
//   //     })
//   //   }


//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: "100vh" }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage:
//               'url("https://png.pngtree.com/thumb_back/fh260/background/20240701/pngtree-smart-farmer-standing-in-green-corn-farm-holding-tablet-image_15838967.jpg")',
//             backgroundColor: (t) =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "left",
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//               {/* <i class="fa-solid fa-user"></i> */}
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" required />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={submit}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="/signUp" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }



import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:3001/signUp", {
        email,
        password,
      });
      if (response.status === 200) {
        toast.success("Successful Login");
        navigate("/home");
      } else {
        toast.error("Invalid login credentials");
      }
    } catch (error) {
      toast.error("Error during login");
      console.error("Error during login:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url("https://media.licdn.com/dms/image/D5612AQG6Rb_DhL5cAg/article-cover_image-shrink_600_2000/0/1708009028937?e=2147483647&v=beta&t=_y0344RxWZ84g32-qy0iBNKn5fk_Mc-dPInoh6To8zg")',
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
