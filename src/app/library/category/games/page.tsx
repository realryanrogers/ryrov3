
import LibraryHeader from "@/components/LibraryHeader";
import NotePreview from "@/components/NotePreview";

import getNoteMetaData from "@/components/getNoteMetaData";

export const generateStaticParams = async () => {
  const noteMetaData = getNoteMetaData();
  return noteMetaData.map((note) => ({
      slug: note.slug,
      firstConsumed: note.firstConsumed,
      type: note.type
  }))
}

const GamesPage = (props: any) => {
    
    const activeParam = props.params.slug;
    const notePreviews = Object.values(props.params).filter((note: any) => {
      return note.type.toLowerCase() == 'games';
    })
    .map((note: any) => (
    
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