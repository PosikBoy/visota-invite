import axios from "axios";

class InvitationService {
  async acceptInvitation(fullNameId: string) {
    try {
      const result = await axios.post<{ message: string }>(
        "/api/accept-invitation",
        {
          fullNameId: fullNameId,
        }
      );
      return result.data.message;
    } catch (error) {
      console.log(error);
    }
  }
  async denyInvitation(fullNameId: string) {
    try {
      const result = await axios.post<{ message: string }>(
        "/api/deny-invitation",
        {
          fullNameId: fullNameId,
        }
      );
      return result.data.message;
    } catch (error) {
      console.log(error);
    }
  }
}

const invitationService = new InvitationService();
export default invitationService;
