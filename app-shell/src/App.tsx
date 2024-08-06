import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "./App.css";

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: 250,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 250,
  },
}));

const ContentStyled = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const ToolbarStyled = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const App = () => {
  const [currentApp, setCurrentApp] = useState<JSX.Element | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const loadRemoteApp = async (remoteAppName: string) => {
    handleMenuClose();
    try {
      if (remoteAppName === "Remote") {
        const remoteApp = await import("remoteApp/App");
        setCurrentApp(<remoteApp.default />);
      } else if (remoteAppName === "Host") {
        const hostApp = await import("hostApp/App");
        setCurrentApp(<hostApp.default />);
      }
    } catch (error) {
      console.error(`Failed to load ${remoteAppName}`, error);
    }
  };

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Applications
          </Typography>
          <Button color="inherit" onClick={handleMenuClick}>
            Applications
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => loadRemoteApp("Remote")}>Remote</MenuItem>
            <MenuItem onClick={() => loadRemoteApp("Host")}>Host</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <ContentStyled>
        <ToolbarStyled />
        <div id="content">{currentApp}</div>
      </ContentStyled>
    </div>
  );
};

export default App;
