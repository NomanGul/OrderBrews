import "./App.css";
import { Box, Button, CircularProgress, Container, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { signInWithGoogle } from "./utils/firebase";
import { auth } from "./firebase.config";
// import Dashboard from "./dashboard/Dashboard";

const FullScreenContainer = ({ children }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </Container>
  );
};

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  return (
    <>
      {loading ? (
        <FullScreenContainer>
          <CircularProgress />
        </FullScreenContainer>
      ) : user ? (
        <Box>
          <Typography variant="h5">
            Signed in as <b>{user.displayName}</b>
          </Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={async () => {
              const success = await signOut();
              if (success) {
                alert("You are sign out");
              }
            }}
          >
            Sign out
          </Button>
          {/* <Dashboard /> */}
        </Box>
      ) : (
        <FullScreenContainer>
          <Button variant="outlined" size="large" startIcon={<GoogleIcon />} onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </FullScreenContainer>
      )}
    </>
  );
};

export default App;
