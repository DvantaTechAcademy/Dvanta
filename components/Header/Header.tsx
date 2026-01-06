'use client';

import React, { useState } from 'react';
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
            <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 95 }, py: { xs: 1, md: 1.5 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flex: { xs: 1, md: 0 }, mr: { xs: 1, md: 4 } }}>
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
                      component="img"
                      src="/logo.png"
                      alt="DVANTA IT Academy"
                      sx={{
                        height: { xs: 72, md: 88 },
                        width: 'auto',
                        objectFit: 'contain',
                        maxWidth: { xs: 250, md: 300 },
                      }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                alignItems: 'center', 
                gap: 0.5,
                flex: 1,
                justifyContent: 'center',
              }}>
                {navItems.map((item) => {
                  if (item.submenu) {
                    return (
                      <Box key={item.path}>
                        <Button
                          onClick={handleMenuOpen}
                          sx={{
                            color: pathname.startsWith(item.path) ? 'secondary.main' : 'text.primary',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-poppins)',
                            textTransform: 'none',
                            px: 1.5,
                            py: 0.5,
                            minWidth: 'auto',
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
                          fontSize: '0.9rem',
                          fontFamily: 'var(--font-poppins)',
                          textTransform: 'none',
                          px: 1.5,
                          py: 0.5,
                          minWidth: 'auto',
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
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', ml: 2 }}>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    component="a"
                    variant="contained"
                    color="secondary"
                    sx={{ 
                      px: 2.5,
                      py: 0.75,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-poppins)',
                      textTransform: 'none',
                      borderRadius: 2,
                      boxShadow: '0 2px 8px rgba(255, 107, 0, 0.3)',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(255, 107, 0, 0.4)',
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Enquire Now
                  </Button>
                </Link>
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, ml: 'auto' }}
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
