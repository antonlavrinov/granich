import React from "react";
import { Container } from "../../style";
import ParticipationForm from "../participation/form";
import ParticipationPolicy from "../participation/ParticipationPolicy";
import * as SC from "./style";

const CourseParticipation = ({
  data,
  formId,
  formAction,
  googleAnaliticsCategory,
  additionalTags,
  telegram,
  additionalComponent,
  policy,
  individualSupport,
}) => (
  <SC.ParticipationSection>
    <Container>
      <SC.ParticipationWrapper policy={policy}>
        <ParticipationForm
          additionalTags={additionalTags}
          googleAnaliticsCategory={googleAnaliticsCategory}
          formId={formId}
          formAction={formAction}
          data={data}
          policy={policy}
          individualSupport={individualSupport}
        />
        {policy && (
          <ParticipationPolicy
            additionalComponent={additionalComponent}
            telegram={telegram}
            data={data}
          />
        )}
      </SC.ParticipationWrapper>
    </Container>
  </SC.ParticipationSection>
);

export default CourseParticipation;
