
import LibraryHeader from "@/components/LibraryHeader";
import { NoteMetaData } from "@/components/NoteMetaData";
import NotePreview from "@/components/NotePreview";

import getNoteMetaData from "@/components/getNoteMetaData";



const MoviesPage = (props: any) => {
    const noteMetaData = getNoteMetaData();
    const activeParam = "movie"
    const notePreviews = noteMetaData.filter((note) => {
      return note.type.toLowerCase() == activeParam;
    }) 
    .sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime()
  }).map((note) => (
    
    <NotePreview key={note.slug} {...note} />
    
  ))

  return(
    <div>
      <LibraryHeader {...{active: activeParam}}/>
      {notePreviews}
    </div>
  )
}

export default MoviesPage;