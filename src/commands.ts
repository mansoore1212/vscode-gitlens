'use strict';
import { CommandContext, setCommandContext } from './constants';
import { Container } from './container';

export * from './commands/common';

export * from './commands/clearFileAnnotations';
export * from './commands/closeUnchangedFiles';
export * from './commands/copyMessageToClipboard';
export * from './commands/copyShaToClipboard';
export * from './commands/diffBranchWithBranch';
export * from './commands/diffDirectory';
export * from './commands/diffLineWithPrevious';
export * from './commands/diffLineWithWorking';
export * from './commands/diffWith';
export * from './commands/diffWithBranch';
export * from './commands/diffWithNext';
export * from './commands/diffWithPrevious';
export * from './commands/diffWithRevision';
export * from './commands/diffWithWorking';
export * from './commands/externalDiff';
export * from './commands/openBranchesInRemote';
export * from './commands/openBranchInRemote';
export * from './commands/openChangedFiles';
export * from './commands/openCommitInRemote';
export * from './commands/openFileInRemote';
export * from './commands/openFileRevision';
export * from './commands/openInRemote';
export * from './commands/openRepoInRemote';
export * from './commands/openWorkingFile';
export * from './commands/resetSuppressedWarnings';
export * from './commands/showCommitSearch';
export * from './commands/showGitExplorer';
export * from './commands/showHistoryExplorer';
export * from './commands/showLastQuickPick';
export * from './commands/showQuickBranchHistory';
export * from './commands/showQuickCommitDetails';
export * from './commands/showQuickCommitFileDetails';
export * from './commands/showQuickCurrentBranchHistory';
export * from './commands/showQuickFileHistory';
export * from './commands/showQuickRepoStatus';
export * from './commands/showQuickStashList';
export * from './commands/showResultsExplorer';
export * from './commands/stashApply';
export * from './commands/stashDelete';
export * from './commands/stashSave';
export * from './commands/toggleCodeLens';
export * from './commands/toggleFileBlame';
export * from './commands/toggleFileHeatmap';
export * from './commands/toggleFileRecentChanges';
export * from './commands/toggleLineBlame';

import * as Commands from './commands';

export function configureCommands(): void {
    setCommandContext(CommandContext.KeyMap, Container.config.keymap);

    Container.context.subscriptions.push(new Commands.ClearFileAnnotationsCommand());
    Container.context.subscriptions.push(new Commands.CloseUnchangedFilesCommand());
    Container.context.subscriptions.push(new Commands.CopyMessageToClipboardCommand());
    Container.context.subscriptions.push(new Commands.CopyShaToClipboardCommand());
    Container.context.subscriptions.push(new Commands.DiffBranchWithBranchCommand());
    Container.context.subscriptions.push(new Commands.DiffDirectoryCommand());
    Container.context.subscriptions.push(new Commands.DiffLineWithPreviousCommand());
    Container.context.subscriptions.push(new Commands.DiffLineWithWorkingCommand());
    Container.context.subscriptions.push(new Commands.DiffWithCommand());
    Container.context.subscriptions.push(new Commands.DiffWithBranchCommand());
    Container.context.subscriptions.push(new Commands.DiffWithNextCommand());
    Container.context.subscriptions.push(new Commands.DiffWithPreviousCommand());
    Container.context.subscriptions.push(new Commands.DiffWithRevisionCommand());
    Container.context.subscriptions.push(new Commands.DiffWithWorkingCommand());
    Container.context.subscriptions.push(new Commands.ExternalDiffCommand());
    Container.context.subscriptions.push(new Commands.OpenBranchesInRemoteCommand());
    Container.context.subscriptions.push(new Commands.OpenBranchInRemoteCommand());
    Container.context.subscriptions.push(new Commands.OpenChangedFilesCommand());
    Container.context.subscriptions.push(new Commands.OpenCommitInRemoteCommand());
    Container.context.subscriptions.push(new Commands.OpenFileInRemoteCommand());
    Container.context.subscriptions.push(new Commands.OpenFileRevisionCommand());
    Container.context.subscriptions.push(new Commands.OpenInRemoteCommand());
    Container.context.subscriptions.push(new Commands.OpenRepoInRemoteCommand());
    Container.context.subscriptions.push(new Commands.OpenWorkingFileCommand());
    Container.context.subscriptions.push(new Commands.ResetSuppressedWarningsCommand());
    Container.context.subscriptions.push(new Commands.ShowCommitSearchCommand());
    Container.context.subscriptions.push(new Commands.ShowGitExplorerCommand());
    Container.context.subscriptions.push(new Commands.ShowHistoryExplorerCommand());
    Container.context.subscriptions.push(new Commands.ShowLastQuickPickCommand());
    Container.context.subscriptions.push(new Commands.ShowQuickBranchHistoryCommand());
    Container.context.subscriptions.push(new Commands.ShowQuickCommitDetailsCommand());
    Container.context.subscriptions.push(new Commands.ShowQuickCommitFileDetailsCommand());
    Container.context.subscriptions.push(new Commands.ShowQuickCurrentBranchHistoryCommand());
    Container.context.subscriptions.push(new Commands.ShowQuickFileHistoryCommand());
    Container.context.subscriptions.push(new Commands.ShowQuickRepoStatusCommand());
    Container.context.subscriptions.push(new Commands.ShowQuickStashListCommand());
    Container.context.subscriptions.push(new Commands.ShowResultsExplorerCommand());
    Container.context.subscriptions.push(new Commands.StashApplyCommand());
    Container.context.subscriptions.push(new Commands.StashDeleteCommand());
    Container.context.subscriptions.push(new Commands.StashSaveCommand());
    Container.context.subscriptions.push(new Commands.ToggleCodeLensCommand());
    Container.context.subscriptions.push(new Commands.ToggleFileBlameCommand());
    Container.context.subscriptions.push(new Commands.ToggleFileHeatmapCommand());
    Container.context.subscriptions.push(new Commands.ToggleFileRecentChangesCommand());
    Container.context.subscriptions.push(new Commands.ToggleLineBlameCommand());
}