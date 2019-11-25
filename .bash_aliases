alias ll="ls -lhF"
alias la="ls -lhAF"
alias reload='exec "$(realpath /proc/$$/exe)" -l || exec ${SHELL} -l'

[ -d ~/node_modules/.bin ] && export PATH=~/node_modules/.bin:$PATH

alias lyn="learnyounode"
