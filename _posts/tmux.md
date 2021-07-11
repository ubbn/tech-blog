---
slug: tmux
title: Tmux
description: Terminal muliplixer, multiple terminals in one window
date: '2018-09-03'
---

# Tmux
Tmux is Terminal multiplixer which allows to use multiple terminals in one window. 
Its binding key is `Ctrl+b` and notated as `K` in below sections

## 1. Window navigation
Below are some most common commands for managing Tmux windows and panes:  

### 1.1. Create
`K %` Split current pane horizontally into two panes  
`K "` Split current pane vertically into two panes  
`K c` Create a new window (with shell)  

### 1.2. Navigate
`K ;` Toggle between the current and previous pane  
`K o` Go to the next pane  
`K 0` Switch to window 0 (by number )  

### 1.3. Manage open window
`K w` Choose window from a list  
`K ,` Rename the current window  
`K z` Make current pane FULL  
`K x` Close the current pane  

## 2. Session management

The session allows to save and restore state of the currently open terminals

```bash
# Start new named session  
tmux new -s my_session
# List sessions
tmux ls
# Re-attach to detached session  
tmux attach-session -t my_session
```

`K + d` - Detach from the session.  

## 3. Mouse

Press `Shift` and highlight with mouse to copy to clipboard