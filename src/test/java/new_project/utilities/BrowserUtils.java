package new_project.utilities;



public class BrowserUtils {
        /**
         * Switches to new window by the exact title. Returns to original window if target title not found
         * @param targetTitle
         */
        public static void switchToWindow(String targetTitle) {
            String origin = Driver.get().getWindowHandle();
            for (String handle : Driver.get().getWindowHandles()) {
                Driver.get().switchTo().window(handle);
                if (Driver.get().getTitle().equals(targetTitle)) {
                    return;
                }
            }
            Driver.get().switchTo().window(origin);
        }



        /**
         * Performs a pause
         *
         * @param seconds
         */
        public static void waitFor(int seconds) {
            try {
                Thread.sleep(seconds * 1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }
