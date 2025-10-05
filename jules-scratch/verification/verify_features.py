from playwright.sync_api import sync_playwright, expect
import os

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to the HTML file
        file_path = os.path.abspath('index.html')

        # Navigate to the local HTML file
        page.goto(f'file://{file_path}')

        # Open notes
        page.locator("#notesToggle").click()
        expect(page.locator("#notesSidebar")).to_be_visible()

        # Add a new note
        page.locator("#addNoteTab").click()

        # Rename the new note
        new_note_title_locator = page.locator('.note-title').last
        new_note_title_locator.dblclick()

        # Get an element handle to pass to the function
        new_note_title_handle = new_note_title_locator.element_handle()

        # wait for the element to be editable using a javascript function
        page.wait_for_function("element => element.isContentEditable", arg=new_note_title_handle)

        new_note_title_locator.fill("Renamed Note")
        new_note_title_locator.press("Enter")

        # Drag the new note to the top
        notes = page.locator(".notes-tab").all()
        if len(notes) > 1:
            source = notes[-1]
            target = notes[0]
            source.drag_to(target)

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/desktop_verification.png")

        # Test mobile view
        page.set_viewport_size({"width": 375, "height": 667})
        page.screenshot(path="jules-scratch/verification/mobile_verification.png")

        browser.close()

if __name__ == "__main__":
    main()