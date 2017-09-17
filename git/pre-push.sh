#!/usr/bin/env bash

image_directories=(
    assets/img/projects
    assets/img/posts
)

###
# Helper functions
##
function info () {
	printf "\r  [ \033[00;34m..\033[0m ] %s\n" "$1"
}

function success () {
	printf "\r\033[2K  [ \033[00;32mOK\033[0m ] %s\n" "$1"
}

function warn () {
  printf "\r\033[2K  [\033[0;31mWARN\033[0m] %s\n" "$1"
}

function sub_warn () {
  printf "\r\033[2K  [\033[0;31mWARN\033[0m] \t%s\n" "$1"
}

function stash_pop () {
	# Puts back the stuff that wasn't committed
	info "Git stashing: Putting back temporarily stashed files"
	git stash pop -q
}

function stash_push () {
    info "Git stashing: Stashing non-committed files temporarily"
    if git stash -q --keep-index ; then
        success "Git stashing: All non-committed files have been temporarily stashed"
    else
        warn "Git stashing: An error occurred trying to stash non-relevant files, please check for any merge conflicts"
        exit 1
    fi
}

# Some source used from the sample .pre-commit files by the golang team,
# at https://tip.golang.org/misc/git/pre-commit

# Makes sure that the script doesn't run on stuff outside of the committed repo
#stash_push # TODO uncomment before push

# TODO remove after
## Generates the thumbnails in each directory given
#
#for image_directory in "${image_directories[@]}"; do
#    # Sanity check: Makes sure the thumbnails directory is created
#    if [[ ! -d "$image_directory/thumbnails" ]]; then
#        info "Creating the thumbnails directory in: $image_directory"
#        if mkdir -p "$image_directory/thumbnails"; then
#            success "Thumbnails directory is now created"
#        else
#        # TODO stash_pop # Uncomment before push
#            fail "Thumbnails directory failed to be created"
#        fi
#   fi
#
#    # Converts all image thumbnails
#    info "Generating thumbnail for: $image_directory"
#
#    # Conversion command taken from https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/
#    if mogrify -path "$image_directory/thumbnails/" -filter Triangle -define filter:support=2 -thumbnail 100 -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip "$image_directory/*.jpg" ; then
#            success "Thumbnail successfully generated"
#    else
#            fail "Thumbnail failed to be generated"
#    fi
#done

# TODO add in HTML lint
htmlproofer --assume-extension ./_site
