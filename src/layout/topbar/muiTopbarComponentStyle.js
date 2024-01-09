const drawerWidth = 240;

export const styledToolbar = {
  "&.MuiToolbar-root": {
    backgroundColor: "white",
    color: "#3E3459",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export const appbarLogoWrapper = {
  "&.MuiBox-root": {
    display: "flex",
    alignItems: "center",
  },
};

export const appbarLogoText = {
  "&.MuiTypography-root": {
    color: "secondary.main",
    fontFamily: "SofiaProBold",
    fontSize: "25px",
    fontWeight: "700",
    display: { xs: "none", sm: "block" },
  },
};

export const appbarRoutes = {
  "&.MuiBox-root": {
    display: { xs: "none", sm: "flex", md: "flex" },
    ml: { sm: 5, xs: 0 },
    flexGrow: -10,
  },
};

export const appbarUserDetailsWrapper = {
  "&.MuiBox-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
};

export const appbarUserDetails = {
  "&.MuiTypography-root": {
    fontFamily: "SofiaProLight",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "24px",
    letterSpacing: "0.050em",
    mb: 0.6,
  },
};

// appbar temporary drawer

export const appbarTemporaryDrawer = {
  "&.MuiDrawer-root": {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      // backgroundColor: "#F8F9F9",
      [`::-webkit-scrollbar`]: {
        width: 0,
        background: "transparent",
      },
    },
  },
};

export const appbarTemporaryLogo = {
  "&.MuiTypography-root": {
    mt: 2,
    p: 1,
    color: "#3E3459",
    fontFamily: "SofiaProBold",
    fontWeight: 700,
    fontSize: 20,
  },
};
