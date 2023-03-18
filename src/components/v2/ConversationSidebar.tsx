import { For } from 'solid-js'
import { useStore } from '@nanostores/solid'
import { chatList, currentChatId } from '@/stores/chat'
import ConversationSidebarItem from './ConversationSidebarItem'
import ConversationSidebarAdd from './ConversationSidebarAdd'

export default () => {
  const $chatList = useStore(chatList)
  const $currentChatId = useStore(currentChatId)

  return (
    <>
      <div class="h-12 border-b border-base flex px-4 items-center">
        Conversations [{ $currentChatId() }]
      </div>
      <div class="flex-1 overflow-auto">
        <For each={$chatList()}>
          {item => (
            <ConversationSidebarItem instance={item} />
          )}
        </For>
        <ConversationSidebarAdd />
      </div>
    </>
  )
}
