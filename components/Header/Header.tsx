'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
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
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useScrollTrigger();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
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
                color: pathname === item.path ? '#4FC3F7' : 'text.primary',
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
            backgroundColor: trigger ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            color: 'text.primary',
            borderBottom: trigger ? '1px solid rgba(79, 195, 247, 0.1)' : 'none',
            transition: 'all 0.3s ease',
            boxShadow: trigger ? '0 4px 20px rgba(79, 195, 247, 0.1)' : 'none',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ minHeight: { xs: 65, md: 80 }, py: { xs: 0.75, md: 1 } }}>
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
                      alt="DVANTA Infotech"
                      sx={{
                        height: { xs: 60, md: 75 },
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
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} passHref legacyBehavior>
                    <Button
                      component="a"
                      sx={{
                        color: pathname === item.path ? '#4FC3F7' : 'text.primary',
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
                          backgroundColor: '#4FC3F7',
                          borderRadius: '2px 2px 0 0',
                        } : {},
                        '&:hover': { 
                          backgroundColor: 'rgba(79, 195, 247, 0.08)',
                          color: '#4FC3F7',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', ml: 2 }}>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    component="a"
                    variant="contained"
                    sx={{ 
                      px: 2.5,
                      py: 0.75,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-poppins)',
                      textTransform: 'none',
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #0b2d4d 0%, #4FC3F7 100%)',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(79, 195, 247, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #0a2540 0%, #29B6F6 100%)',
                        boxShadow: '0 6px 16px rgba(79, 195, 247, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Started
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
