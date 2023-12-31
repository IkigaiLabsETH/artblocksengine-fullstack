import { values } from 'ramda'
import { Allowlist, showAllowlist } from '../../modules/Allowlist'
import { interactionProgressAction } from '../../modules/Collection/Token/token.slice'
import { InteractionSteps } from '../../modules/InteractionSteps'
import { MintPass } from '../../modules/MintPass'
import { showMintPassDetails } from '../../modules/MintPasses'
import { mintSuccess } from '../../modules/Drop'
import { SuccessfulModal } from '../../modules/Drop/SuccessModal'
import { changeRoute } from '../app'

export const openModalActions = [showMintPassDetails, showAllowlist, interactionProgressAction, mintSuccess]
export const closeModalActions = [changeRoute]

export const MODALS = {
  [showMintPassDetails.type]: (data: any) => <MintPass {...data} />,
  [showAllowlist.type]: () => <Allowlist />,
  [interactionProgressAction.type]: (steps: any[]) => <InteractionSteps steps={values(steps)} />,
  [mintSuccess.type]: (data: any) => <SuccessfulModal {...data} />,
}
