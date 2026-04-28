
import React from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog.jsx";
import SearchCommand from './SearchCommand.jsx';

const SearchDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden max-w-2xl border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl sm:rounded-xl">
        <DialogTitle className="sr-only">Search Navigation</DialogTitle>
        <SearchCommand onSelect={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
