# File System (FS module)
fs module directly communicate with operating system rather than a common operation on a files or folder are

1. File-> write file, read file, append file
2. Folder-> mkdir/md,rmdir/rm,readdir
3. File metadata-> stat, lstat,rstat
4. Watch-> watch, unwatch
5. Stream->readstream(), writestream()

All functions are promise so it must be call with await keyword
If a function uses await keyword then function must be a async