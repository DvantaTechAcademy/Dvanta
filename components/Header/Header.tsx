'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useScrollTrigger();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Courses',
      path: '/courses',
      submenu: [
        { label: 'Java Full Stack', path: '/courses/java-full-stack' },
        { label: 'Full Stack Web Developer', path: '/courses/full-stack-web' },
        { label: 'AI / ML Foundations', path: '/courses/ai-ml-foundations' },
        { label: 'Generative AI & ChatGPT', path: '/courses/generative-ai' },
        { label: 'DevOps Fundamentals', path: '/courses/devops-fundamentals' },
        { label: 'Python & Data Science', path: '/courses/python-data-science' },
      ],
    },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Internship', path: '/internship' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <List>
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} passHref legacyBehavior>
            <ListItem
              button
              component="a"
              sx={{
                color: pathname === item.path ? 'primary.main' : 'text.primary',
                fontWeight: pathname === item.path ? 600 : 400,
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="sticky"
          elevation={trigger ? 4 : 0}
          sx={{
            backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            color: 'text.primary',
            borderBottom: trigger ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
              <Link href="/" passHref legacyBehavior>
                <Box
                  component="a"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'primary.main',
                      borderRadius: 2,
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                    }}
                  >
                    DVANTA
                  </Box>
                </Box>
              </Link>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                {navItems.map((item) => {
                  if (item.submenu) {
                    return (
                      <Box key={item.path}>
                        <Button
                          onClick={handleMenuOpen}
                          sx={{
                            color: pathname.startsWith(item.path) ? 'secondary.main' : 'text.primary',
                            fontWeight: 500,
                            fontSize: '0.95rem',
                            fontFamily: 'var(--font-poppins)',
                            textTransform: 'none',
                            '&:hover': { 
                              backgroundColor: 'rgba(255, 107, 0, 0.08)',
                              color: 'secondary.main',
                            },
                          }}
                        >
                          {item.label} ▾
                        </Button>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                        >
                          {item.submenu.map((subItem) => (
                            <Link key={subItem.path} href={subItem.path} passHref legacyBehavior>
                              <MenuItem component="a" onClick={handleMenuClose}>
                                {subItem.label}
                              </MenuItem>
                            </Link>
                          ))}
                        </Menu>
                      </Box>
                    );
                  }
                  return (
                    <Link key={item.path} href={item.path} passHref legacyBehavior>
                      <Button
                        component="a"
                        sx={{
                          color: pathname === item.path ? 'secondary.main' : 'text.primary',
                          fontWeight: 500,
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-poppins)',
                          textTransform: 'none',
                          position: 'relative',
                          '&::after': pathname === item.path ? {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: '20%',
                            right: '20%',
                            height: '2px',
                            backgroundColor: 'secondary.main',
                            borderRadius: '2px 2px 0 0',
                          } : {},
                          '&:hover': { 
                            backgroundColor: 'rgba(255, 107, 0, 0.08)',
                            color: 'secondary.main',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    component="a"
                    variant="contained"
                    color="secondary"
                    sx={{ ml: 1 }}
                  >
                    Enquire Now
                  </Button>
                </Link>
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;

