---
slug: vim
title: Vim
description: Modified vi text editor-ийн түгээмэл хэрэглэгддэг shortkeys
date: '2017-03-04'
---

# Vim

## Window management
|  |  |
| :- | :- |
|`sp <file name>` | split view horizontal  |
|`vsp <file name>` | split view vertical  |
|`qa!` | quit all buffers  |
|`e!` | discard all unsaved changes  |
|`C+W,V` | split verticall  |
|`C+W,S` | split horizontal  |
|`C+W,O` | only one window  |
|`C+W,W` | switch cursor next window   |
|`C+W,P` | switch cursor previous window|   
|`C+W,R` | exchange split views   |
|`C+W,X` | exchange split views   |
|`vertical resize +/-10`   | resize window vertically minus, plus or exact value  |
|`help ctrl-w`             | show all help for short key  |
|`.` | repeat last action |

## Buffer management
|  |  |
| :- | :- |
|`:buffers` or `:ls` | to see all open buffers |
|`:bp` | move to previous buffer |
|`:bn` | move to next buffer |
|`:b4` | jump to buffer 4 |
|`:bd` | delete buffer |
|`:ba` | show all buffer in screen |
|`C+6` | switch between alternating 2buffers |
|`vs \| b3` | open buffer 3 in vertical new window |

## Tab management
|  |  |
| :- | :- |
`:tabedit/tabe <file name>`    | open file in new tab |
`:tabn`       | to next tab |
`:tabonly`    | close all other tabs |
`:tab ball`   | open all buffers on new tabs |
`:tab split`  | open current buffer on new tab |
`gt`          | to next tab |
`gT`          | to previous tab |
`C+PgD,PgU`   | to next/prev tab |

## Navigation
|  |  |
| :- | :- |
`gg`  | move cursor to first line of file |
`G`   | move to end of file  |
`4G`  | move to line 4 |
`H`	| move to home of screen |
`M`	| move to middle of screen |
`L`	| move to last of screen |

## Search
|  |  |
| :- | :- |
|`n`	| find next |
|`N`	| find previous |
|`*`	| find word under cursor |

## Some other magic
|  |  |
| :- | :- |
|`C+P` or `C+N` | auto completion from existing texts |
|`C+XF` | auto file name completion !!! Important |
|`C+XL` | context aware completion |

## Page navigation
|  |  |
| :- | :- |
| `Ctrl-y` | Moves screen up one line |
| `Ctrl-e` | Moves screen down one line |
| `Ctrl-u` | Moves cursor & screen up ½ page |
| `Ctrl-d` | Moves cursor & screen down ½ page |
| `Ctrl-b` | Moves screen up one page, cursor to last line |
| `Ctrl-f` | Moves screen down one page, cursor to first line |
