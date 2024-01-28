
import LibraryHeader from "@/components/LibraryHeader";
import { NoteMetaData } from "@/components/NoteMetaData";
import NotePreview from "@/components/NotePreview";

import getNoteMetaData from "@/components/getNoteMetaData";



const GamesPage = (props: any) => {
    const noteMetaData = getNoteMetaData();
    const activeParam = "game"
    const notePreviews = noteMetaData.filter((note) => {
      return note.type.toLowerCase() == activeParam;
    }) 
    .sort((a, b) => {
    return new Date(b.firstConsumed).getTime() - new Date(a.firstConsumed).getTime()
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

export default GamesPage;