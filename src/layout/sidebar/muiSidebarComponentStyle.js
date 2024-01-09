const drawerWidth = 240;

export const sidebarListItem = {
  "&.MuiListItem-root": {
    color: "white",
    borderRadius: "5px",
    "&.active": {
      backgroundColor: "#3E3459",
      borderRadius: "15px",
      textDecoration: "none",
      "& svg": {
        color: "white",
      },
      "& .MuiListItemText-root": {
        color: "white ",
      },
    },
  },
};

export const listItemButton = {
  "&.MuiListItemButton-root": {
    height: "50px",
    borderRadius: "15px",
  },
};

export const listItemText = {
  "&.MuiListItemText-root": {
    color: "#000000",
    fontWeight: "300",
    fontSize: "15px",
    lineHeight: "50px",
  },
};

export const sidebarNavWrapper = {
  "&.MuiBox-root": {
    width: { sm: drawerWidth },
    flexShrink: { sm: 0 },
  },
};

export const styledTemporaryDrawer = {
  "&.MuiDrawer-root": {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
};

export const styledPermanentDrawer = {
  "&.MuiDrawer-root": {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      // backgroundColor: "#F8F9F9",
      marginTop: "93px",
      pt: 5,
      [`::-webkit-scrollbar`]: {
        width: 0,
        background: "transparent",
      },
    },
  },
};
