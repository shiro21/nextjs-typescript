import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import { ModeProps } from '@/utils/interface';

import { useTheme } from '@mui/material'

const Header: FC<ModeProps> = ({ mode, onChange }) => {

    const customTheme = useTheme(); // 다른 구성요소에 사용 - 테마 사용가능

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar
            style={{backgroundColor: customTheme.palette.background.paper, color: customTheme.palette.text.primary}}
            position="static"
        >
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
              Shiro21 Blog Test
            </Typography>
            <Switch checked={mode === "dark"} onChange={onChange} color="secondary" />
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Header;