import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
    CurriculumHeader,
    CurriculumHeaderTitle,
    CurriculumTitleAndContent,
    CurriculumBonusBlock,
    CurriculumContent,
    CurriculumInfoWrapper

} from './styles';
import { INLINES, BLOCKS } from '@contentful/rich-text-types'




const options = {
    renderNode: {
        [INLINES.HYPERLINK]: (node) => {
            if (node.data.uri.indexOf('youtube.com') !== -1) {
                return (
                    <iframe src={node.data.uri} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )
            } else {
                return <a href={node.data.uri} rel="noopener noreferrer" target='_blank' >{node.content[0].value}</a>;
            }

        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { title, file } = node.data.target.fields;
            // console.log('NODE', node)
            return <img
                alt={title ? title['en-US'] : null}
                src={file['en-US'].url}
            />

        },
    },
}




const CurriculumHead = ({ dataHeader, compressedHeader }) => {
    return (
        <>
            {compressedHeader ? (
                <CurriculumCompressedHead dataHeader={dataHeader} />
            ) : (
                    <CurriculumNormalHead dataHeader={dataHeader} />
                )}
        </>

    )
}

// const CurriculumHead = ({ dataHeader, withImage }) => {
//     return (
//         <CurriculumHeader>
//             <CurriculumTitleAndContent>
//                 <CurriculumHeaderTitle>{dataHeader.curriculumHeaderTitle}</CurriculumHeaderTitle>
//                 {dataHeader.childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode && (
//                     <CurriculumContent >
//                         {documentToReactComponents(dataHeader.childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode.json)}
//                     </CurriculumContent>
//                 )}
//             </CurriculumTitleAndContent>
//             <CurriculumInfoWrapper>
//                 <CurriculumBonusBlock withImage={withImage}>
//                     {documentToReactComponents(dataHeader.curriculumHeaderInfo.json, options)}
//                 </CurriculumBonusBlock>
//             </CurriculumInfoWrapper>

//         </CurriculumHeader>
//     )
// }

export default CurriculumHead


const CurriculumNormalHead = ({ dataHeader }) => {
    return (
        <CurriculumHeader>
            <CurriculumTitleAndContent>
                <CurriculumHeaderTitle>{dataHeader.curriculumHeaderTitle}</CurriculumHeaderTitle>
                {dataHeader.childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode && (
                    <CurriculumContent >
                        {documentToReactComponents(dataHeader.childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode.json)}
                    </CurriculumContent>
                )}
            </CurriculumTitleAndContent>
            <CurriculumInfoWrapper>
                <CurriculumBonusBlock>
                    {documentToReactComponents(dataHeader.curriculumHeaderInfo.json, options)}
                </CurriculumBonusBlock>
            </CurriculumInfoWrapper>

        </CurriculumHeader>
    )
}


const CurriculumCompressedHead = ({ dataHeader }) => {
    return (
        <CurriculumHeader compressedHeader>
            <CurriculumTitleAndContent compressedHeader>
                <CurriculumHeaderTitle compressedHeader>{dataHeader.curriculumHeaderTitle}</CurriculumHeaderTitle>
            </CurriculumTitleAndContent>
            {/* <CurriculumInfoWrapper >
                <CurriculumBonusBlock compressedHeader>
                    {documentToReactComponents(dataHeader.curriculumHeaderInfo.json, options)}
                </CurriculumBonusBlock>
            </CurriculumInfoWrapper> */}

        </CurriculumHeader>
    )
}
