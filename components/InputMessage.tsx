export default function InputMessage() {
  return (
    <div className="flex flex-row items-center justify-center w-11/12 gap-2">
      <input className="rounded-md px-4 py-2 bg-inherit border w-full" name="message" placeholder="Digite sua mensagem..." />
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      </button>
    </div>
  );
}
